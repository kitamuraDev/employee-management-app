import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  template: `
    <section class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 class="text-lg sm:text-xl font-semibold text-gray-700 mx-5 sm:mx-12">{{ sectionTitle }}</h2>
      <ng-content />
    </section>
  `,
})
export class SectionComponent {
  @Input({ required: true }) sectionTitle!: string;
}
