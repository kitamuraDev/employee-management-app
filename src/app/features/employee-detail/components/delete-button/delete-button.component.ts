import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
})
export class DeleteButtonComponent {
  @Output() deleteEmployee: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClickEvent() {
    this.deleteEmployee.emit();
  }
}
