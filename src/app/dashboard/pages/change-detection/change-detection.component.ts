import { JsonPipe } from './change-detection.pipe';
import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"/>

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
})
export default class ChangeDetectionComponent implements OnInit {

  public currentFramework = computed(
    ()=> `Change Detection - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    release: '2016'
  });

  public frameworkAsProperty = {
    name: 'Angular',
    release: '2016'
  };

  constructor() {

    // este es un setTimeout para esperar y mostrar las cosas
    setTimeout(() => {

      //this.frameworkAsProperty.name = 'React';
      // esto me permite actualizar el signal despues de los 3 segundos
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

      console.log(`Hecho`);
    }, 3000);
  }

  ngOnInit() {
  }

}
