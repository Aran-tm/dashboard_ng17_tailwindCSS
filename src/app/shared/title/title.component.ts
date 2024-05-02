import { booleanAttribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <h1 class="text-3xl mb-5"> {{ title }} </h1>
  `,
})
export class TitleComponent implements OnInit {

  // declaro un input
  @Input({required: true}) title!: string;
  @Input({ transform: booleanAttribute}) withShadow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
