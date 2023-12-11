import { Component, OnInit, inject, signal } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employees } from '../../shared/types/employees';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);

  readonly officers = signal<Employees[]>([]);

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((employee) => this.officers.set(employee.slice(1, 5)));
  }
}
