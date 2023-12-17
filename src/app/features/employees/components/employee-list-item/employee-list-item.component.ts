import { Component, Input } from '@angular/core';
import { Employees } from '../../../../shared/types/employees';

@Component({
  selector: 'app-employee-list-item',
  standalone: true,
  imports: [],
  templateUrl: './employee-list-item.component.html',
})
export class EmployeeListItemComponent {
  @Input({ required: true }) employee!: Employees;
}
