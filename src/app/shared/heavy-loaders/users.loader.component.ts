
// snippets para crear nuevo componente:  a-component
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [],
  template: `
    <h1>Hola Mundo</h1>
  `
})

export class UserLoaderComponent {
  constructor() { }
  
}
