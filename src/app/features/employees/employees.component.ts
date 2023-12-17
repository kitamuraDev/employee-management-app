import { Component, OnInit, inject, signal } from '@angular/core';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employees } from '../../shared/types/employees';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [AddEmployeeComponent, EmployeeListComponent],
  templateUrl: './employees.component.html',
})
export default class EmployeesComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);

  readonly employees = signal<Employees[]>([]);

  ngOnInit(): void {
    this.getAllEmployee().then((values) => this.employees.set(values));
  }

  // 全件取得
  getAllEmployee() {
    return this.employeeService.getAllEmployee();
  }

  // 追加
  async addEmployee(form: string) {
    const addedEmployee = await this.employeeService.addEmployee(form);
    this.employees.update((values) => [...values, addedEmployee]);
  }
}
