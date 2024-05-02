import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

// hay que imprtar el common module para que detecte el ngClass
@Component({
  standalone: true,
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent implements OnInit {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log(`Heavy Loader Component`);

    const start = Date.now();

    // proceso bloqueante en el codigo
    while (Date.now() - start < 3000) {

    }
  }

  ngOnInit() {
  }

}
