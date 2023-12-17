import { Component, Input } from '@angular/core';
import { Employees } from '../../../../shared/types/employees';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list-item.component.html',
})
export class EmployeeListItemComponent {
  @Input({ required: true }) employee!: Employees;
}
