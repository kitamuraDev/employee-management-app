import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="h-[80vh] grid place-content-center bg-white px-4">
      <h1 class="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
    </div>
  `,
})
export default class NotFoundComponent {}
