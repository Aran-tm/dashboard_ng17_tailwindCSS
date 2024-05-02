import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

// esto es un nuevo tipo gratantizando la seguridad de tipos Grade
type Grade = 'A' | 'B' | 'F';

// define a esta clase como un componente
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export default class ControlFlowComponent implements OnInit {

  // propiedades de clase
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'React', 'Svelte', 'Laravel', 'Qwik']);
  public frameworks2 = signal([]);

  public toggleContent() {

    // cuando hago click en el valor del boton, automaticamente cambia su valor booleano
    // funcion update y se pasa por parametro un valor value
    this.showContent.update(value => !value);
  }

  constructor() { }

  ngOnInit() {
  }

}
