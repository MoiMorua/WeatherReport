import { Component, OnInit } from '@angular/core';
import { GeolocateService } from '../../services/geolocate.service';
import { OpenweatherApiRequestService } from '../../services/openweather-api-request.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  CURRENT_IP;

  location:location;
  weather:any = {};
  dayNight:string;

  loading = true;

  constructor(
    private geolocate   : GeolocateService,
    private openWeather : OpenweatherApiRequestService
  ) {
  }
  
  ngOnInit(){
    this.getLocation();

  }

    getLocation(){
      if(this.geolocate.isLocationAvailable()){

        this.geolocate.getLocation()
        .then((location:GeolocationPosition) => 
          {
            this.location = { 
              lat : location.coords.latitude,
              lng : location.coords.longitude
            }
            
            this.getWeatherData();
            
          }
        )
        .catch(err =>{
          //If user denies location setup the New York coords

          console.warn(err);

          this.location = { 
            lat : 40.6643,
            lng : -73.9385
          }

          this.getWeatherData();

        });
      }
    }

    getWeatherData(){
      this.openWeather.getData(
        this.location.lat,
        this.location.lng
      ).subscribe( response => {
        this.weather = response;
        console.log(this.weather);
        this.loading = false;
        this.dayNight = this.isDayOrNight();
      });
    }

    getTemp():number{
      if(!this.loading){
        return this.weather.main.temp
      }

      return 0;
    }

    getWeatherDescription():string{
      if(!this.loading){
        return this.weather.weather[0].description;
      }
      return "No disponible";
    }

    isDayOrNight(){
      if(this.loading){
        return "";
      }
      
      let dayTime = this.weather.dt;
      let sunRise = this.weather.sys.sunrise;
      let sunSet = this.weather.sys.sunset;
      
      //Si es más tarde que el amanecer
      if(dayTime > sunRise && dayTime < sunSet){
        return 'day';
      }

      return 'night';
    }
  
}

interface location{
  city?: string,
  country?: string,
  lat: number,
  lng: number,
  region?: string
} 


