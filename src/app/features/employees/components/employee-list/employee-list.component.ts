import { Component, Input, Signal } from '@angular/core';
import { Employees } from '../../../../shared/types/employees';
import { EmployeeListItemComponent } from '../employee-list-item/employee-list-item.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeListItemComponent],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  @Input({ required: true }) employees!: Signal<Employees[]>;
}
