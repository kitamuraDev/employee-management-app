import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { Employees } from '../../../../shared/types/employees';

@Component({
  selector: 'app-edit-name-input',
  standalone: true,
  imports: [],
  templateUrl: './edit-name-input.component.html',
})
export class EditNameInputComponent {
  @Input({ required: true }) isEdit!: boolean;
  @Input({ required: true }) employee!: Signal<Employees>;
  @Output() editEmployee: EventEmitter<string> = new EventEmitter<string>();

  handleEditEmployee(form: string) {
    this.editEmployee.emit(form);
  }
}
