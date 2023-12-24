import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [],
  template: `
    <div
      class="overflow-y-auto overflow-x-hidden z-50 fixed top-0
      {{ isOpenDialog ? 'flex' : 'hidden' }}
      justify-center items-center w-screen h-screen bg-stone-950 bg-opacity-75"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow">
          <button
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            (click)="handleToggleDialog()"
          >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>

          <div class="p-4 md:p-5 text-center">
            <h3 class="my-5 text-lg font-normal text-gray-500">本当に削除しますか？</h3>
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              (click)="handleDeleteEmployee()"
            >
              はい
            </button>
            <button
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              (click)="handleToggleDialog()"
            >
              いいえ
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DeleteConfirmDialogComponent {
  @Input({ required: true }) isOpenDialog!: boolean;
  @Output() toggleDialog: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteEmployee: EventEmitter<void> = new EventEmitter<void>();

  handleToggleDialog(): void {
    this.toggleDialog.emit();
  }

  handleDeleteEmployee(): void {
    this.deleteEmployee.emit();
  }
}
