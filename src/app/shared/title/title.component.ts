import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<div class="text-3xl mb-5">{{title}} - {{withShadow}}</div>`
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
