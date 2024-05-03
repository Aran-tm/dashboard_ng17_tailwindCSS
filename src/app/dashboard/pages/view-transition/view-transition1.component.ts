import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        srcset="https://th.bing.com/th/id/OIP.enULRt4iHGLVNuRvY6JRbwHaHa?rs=1&pid=ImgDetMain"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2"></div>
    </section>
  `
})
export default class ViewTransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
