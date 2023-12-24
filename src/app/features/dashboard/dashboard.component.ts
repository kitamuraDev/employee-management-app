import { Component, OnInit, inject, signal } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee/employee.service';
import { Employees } from '../../shared/types/employees';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);

  readonly officers = signal<Employees[]>([]);

  ngOnInit(): void {
    this.employeeService.getAllEmployee().then((values) => this.officers.set(values.slice(1, 5)));
  }
}
