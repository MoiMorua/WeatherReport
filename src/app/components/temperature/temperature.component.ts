import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  @Input()
  temperature: number;
  @Input()
  name: string;
  @Input()
  dayNight: string;

  constructor() { }

  ngOnInit(): void {
  }

}
