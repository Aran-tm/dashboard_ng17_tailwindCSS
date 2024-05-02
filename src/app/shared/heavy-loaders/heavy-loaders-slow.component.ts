import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heavy-loaders-slow',
  template: `
    <h1>Hola Mundo</h1>
  `
})
export class HeavyLoadersSlowComponent implements OnInit {

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
