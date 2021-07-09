import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import  {gsap} from 'gsap';
import { RainComponent } from '../rain/rain.component';
import { CloudComponent } from '../cloud/cloud.component';
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

  @ViewChild("clouds")
  cloudList: CloudComponent;  

  constructor() { }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.    

    this.animateClouds();    
  }

  getSky():string{

    if(!this.isWeatherReady()){
      return 'clear day';
    }

    const SKY_CONDITIONS = {
      /*THUNDERSTORM*/
      2: ()=>{ return this.isDay()?'dark-clouds day':'dark-clouds night'},
      /*DRIZZLE*/
      3: ()=>{ return this.isDay()?'gray':'night'},      
      /* RAIN */
      500:()=>{ return this.isDay()?'few-clouds day':'night'},
      501:()=>{ return this.isDay()?'few-clouds day':'night'},
      502:()=>{ return this.isDay()?'few-clouds day':'night'},
      503:()=>{ return this.isDay()?'few-clouds day':'night'},
      504:()=>{ return this.isDay()?'few-clouds day':'night'},
      511:()=>{ return this.isDay()?'dark-clouds day':'night'},
      520:()=>{ return this.isDay()?'dark-clouds day':'night'},
      521:()=>{ return this.isDay()?'dark-clouds day':'night'},
      522:()=>{ return this.isDay()?'dark-clouds day':'night'},
      531:()=>{ return this.isDay()?'dark-clouds day':'night'},
      /* SNOW */
      6:()=>{ return this.isDay()?'day':'night'},
      /* ATMOSPHERE */
      7:()=>{ return this.isDay()?'day':'night'},
      /* CLEAR */
      800:()=>{ return this.isDay()?'clear day':'clear night'},
      /* CLOUDS */
      801:()=>{ return this.isDay()?'few-clouds day':'few-clouds night'},
      802:()=>{ return this.isDay()?'few-clouds day':'few-clouds night'},
      803:()=>{ return this.isDay()?'dark-clouds day':'dark-clouds night'},
      804:()=>{ return this.isDay()?'dark-clouds day':'dark-clouds night'},
    
      DEFAULT:()=>{ return 'clear day'}

    };
    // return 'night';
    return SKY_CONDITIONS[String(this.weather.weather[0].id)]() || SKY_CONDITIONS['DEFAULT']();
    
  }

  getClouds():string{

    if(Object.keys(this.weather).length===0){
      return 'clear';
    }
  
    const SKY_CONDITIONS = {
      /*THUNDERSTORM*/
      2:'dark-clouds',
      /*DRIZZLE*/
      3:'clear',      
      /* RAIN */
      5:'few-clouds',
      /* SNOW */
      6:'clear',
      /* ATMOSPHERE */
      7:'clear',
      /* CLEAR */
      800:'clear',
      /* CLOUDS */
      801:'few-clouds',
      802:'few-clouds',
      803:'dark-clouds',
      804:'dark-clouds',
      DEFAULT:()=>{ return 'clear'}

    };
    
    return SKY_CONDITIONS[String(this.weather.weather[0].id)] || SKY_CONDITIONS['DEFAULT'];

  }

  isDay():boolean{
    if(Object.keys(this.weather).length===0){
      return true;
    }
    
    let dayTime = this.weather.dt;
    let sunRise = this.weather.sys.sunrise;
    let sunSet = this.weather.sys.sunset;
    
    //Si es más tarde que el amanecer
    if(dayTime > sunRise && dayTime < sunSet){
      return true;
    }
    
    return false;
  }
  
  getDrops(){
    if(!this.isWeatherReady()){
      return 0;
    }
    const RAIN_CONDITIONS = {
      500:5,
      501:10,
      502:20,
      503:25,
      504:25,      
      520:25,
      521:10,
      522:25,
      531:25
    };    
    return new Array( RAIN_CONDITIONS[String(this.weather.weather[0].id)] || 10);
  }

  animateClouds(){    
    let clouds1 = Array.from(this.cloudList.cloudsGroup1.nativeElement.querySelectorAll('.cloud'));
    let clouds2 = Array.from(this.cloudList.cloudsGroup2.nativeElement.querySelectorAll('.cloud'));
    let clouds3 = Array.from(this.cloudList.cloudsGroup3.nativeElement.querySelectorAll('.cloud'));
    let clouds4 = Array.from(this.cloudList.cloudsGroup4.nativeElement.querySelectorAll('.cloud'));
    let clouds5 = Array.from(this.cloudList.cloudsGroup5.nativeElement.querySelectorAll('.cloud'));

    let clouds = [...clouds1,...clouds2,...clouds3,...clouds4,...clouds5];

    clouds.forEach((element:any) => {

      gsap.to(element,{
        duration: 25 + (Math.random() * 25),
        x: -250,
        yoyo: true,
        repeat: -1
      });
    });
      
  }


  isWeatherReady():boolean{
    return !(Object.keys(this.weather).length===0);    
  }


}
