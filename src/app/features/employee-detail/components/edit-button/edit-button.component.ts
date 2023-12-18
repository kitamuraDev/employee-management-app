import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-button.component.html',
})
export class EditButtonComponent {
  @Output() toggleEditMode: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClickEvent() {
    this.toggleEditMode.emit();
  }
}
