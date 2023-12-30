import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  @Output() addEmployee: EventEmitter<string> = new EventEmitter<string>();

  clickAddEmployee(value: string) {
    this.addEmployee.emit(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyDownAddEmployee(value: string, event: any) {
    if (event.keyCode && event.keyCode !== 13) return;

    this.addEmployee.emit(value);
  }
}
