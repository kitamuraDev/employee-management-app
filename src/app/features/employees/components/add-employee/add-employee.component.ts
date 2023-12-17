import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  @Output() addEmployee: EventEmitter<string> = new EventEmitter<string>();

  handleButtonClickEvent(value: string) {
    this.addEmployee.emit(value);
  }
}
