import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  constructor() { }
  @Input() satellites: Satellite[];
  satCount(satType) {
    return this.satellites.filter(satellite => satellite.type === satType).length
  }

  ngOnInit() {
  }

}
