import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent ],
  templateUrl: './defer-options.component.html',
  styleUrls: ['./defer-options.component.css']
})
export default class DeferOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
