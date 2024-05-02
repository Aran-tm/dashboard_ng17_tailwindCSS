import { JsonPipe } from './change-detection.pipe';
import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  template: `
    <app-title title="Change Detection"/>

    <pre> {{ frameworkAsSingal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
})
export default class ChangeDetectionComponent implements OnInit {

  public frameworkAsSingal = signal({
    name: 'Angular',
    release: '2016'
  });

  public frameworkAsProperty = {
    name: 'Angular',
    release: '2016'
  };

  constructor() { }

  ngOnInit() {
  }

}
