import { Component, OnInit } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css']
})
export default class DeferViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
