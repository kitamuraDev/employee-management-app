import { Component, Input, Signal } from '@angular/core';
import { Employees } from '../../../../shared/types/employees';

@Component({
  selector: 'app-display-name',
  standalone: true,
  imports: [],
  template: `
    <h2 class="{{ isEdit ? 'hidden' : 'block' }} text-base">
      {{ employee().name }}
    </h2>
  `,
})
export class DisplayNameComponent {
  @Input({ required: true }) isEdit!: boolean;
  @Input({ required: true }) employee!: Signal<Employees>;
}
