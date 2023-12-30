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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyDownEditEmployee(input: string, event: any) {
    if (event.keyCode && event.keyCode !== 13) return;

    this.editEmployee.emit(input);
  }
}
