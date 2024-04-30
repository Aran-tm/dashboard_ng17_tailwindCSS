import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export default class ControlFlowComponent implements OnInit {

  // propiedades de clase
  public showContent = signal(false);

  public toggleContent() {

    // cuando hago click en el valor del boton, automaticamente cambia su valor booleano
    // funcion update y se pasa por parametro un valor value
    this.showContent.update(value => !value);
  }

  constructor() { }

  ngOnInit() {
  }

}
