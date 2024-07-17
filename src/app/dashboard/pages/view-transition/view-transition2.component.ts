import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="view transitions 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
