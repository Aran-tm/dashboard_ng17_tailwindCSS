import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  standalone: true,
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `
})
export class HeavyLoadersFastComponent implements OnInit {

  @Input({ required: true }) cssClass!: string;

  constructor() { }

  ngOnInit() {
  }

}
