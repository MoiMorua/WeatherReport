import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input()
  weather:any = {};

  @Input()
  weatherDescription:string;

  constructor() { }

  ngOnInit(): void {
  }

  getSky():string{
    if(!this.weather){
      return 'day';
    }

    const SKY_CONDITIONS = {
      /*THUNDERSTORM*/
      2: ()=>{ return this.isDay()?'dark-gray':'night'},
      /*DRIZZLE*/
      3: ()=>{ return this.isDay()?'gray':'night'},
      /* RAIN */
      4: ()=>{ return this.isDay()?'gray':'night'},
      /* SNOW */
      5:()=>{ return this.isDay()?'day':'night'},
      /* ATMOSPHERE */
      6:()=>{ return this.isDay()?'day':'night'},
      /* CLEAR */
      7:()=>{ return this.isDay()?'day':'night'},
      /* CLOUDS */
      8:()=>{ return this.isDay()?'gray':'night'},
      DEFAULT:()=>{ return 'day'}

    };

    return SKY_CONDITIONS[String(this.weather.weather[0].id).split('')[0]]() || SKY_CONDITIONS['DEFAULT']();
    
  }

  isDay():boolean{
    
    let dayTime = this.weather.dt;
    let sunRise = this.weather.sys.sunrise;
    let sunSet = this.weather.sys.sunset;
    
    //Si es más tarde que el amanecer
    if(dayTime > sunRise && dayTime < sunSet){
      return true;
    }

    return false;
  }


}
