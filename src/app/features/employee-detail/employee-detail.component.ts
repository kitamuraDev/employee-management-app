import { Component, Input, OnInit, Signal, inject, signal } from '@angular/core';
import { Employees } from '../../shared/types/employees';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { EmployeeService } from '../../shared/services/employee/employee.service';
import { Router } from '@angular/router';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditNameInputComponent } from './components/edit-name-input/edit-name-input.component';
import { DisplayNameComponent } from './components/display-name/display-name.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [DisplayNameComponent, EditNameInputComponent, EditButtonComponent, DeleteButtonComponent],
  templateUrl: './employee-detail.component.html',
})
export default class EmployeeDetailComponent implements OnInit {
  @Input({ required: true }) id!: string;
  private readonly titleService = inject(Title);
  private readonly router = inject(Router);
  private readonly employeeService = inject(EmployeeService);

  employee: Signal<Employees> = signal({ name: '' });
  isEdit = false;

  ngOnInit(): void {
    this.getEmployee().then((value) => {
      this.setTitle(value.name);
      this.employee = signal(value);
    });
  }

  setTitle(name: string): void {
    this.titleService.setTitle(`社員管理アプリケーション - ${name}`);
  }

  toggleEditMode(): void {
    this.isEdit = !this.isEdit; // 状態を反転
  }

  async getEmployee() {
    return await this.employeeService.getEmployee(Number(this.id));
  }

  async editEmployee(form: string) {
    await this.employeeService
      .editEmployee(form, Number(this.id))
      .then(() => (this.employee().name = form))
      .finally(() => (this.isEdit = !this.isEdit));
  }

  async deleteEmployee() {
    await this.employeeService.deleteEmployee(Number(this.id)).then(() => {
      this.router.navigate(['/employees']);
    });
  }
}
