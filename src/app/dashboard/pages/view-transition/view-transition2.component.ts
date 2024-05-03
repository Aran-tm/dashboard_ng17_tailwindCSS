import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://th.bing.com/th/id/OIP.enULRt4iHGLVNuRvY6JRbwHaHa?rs=1&pid=ImgDetMain"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: hero2"> </div>
    </section>
  `
})
export default class ViewTransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
