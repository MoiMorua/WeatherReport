import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherApiRequestService {
  
  API_URL = "https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&";
  API_KEY = "71d1b2364875c6d4cb0e03cfb9013eae";

  constructor(
    private http: HttpClient
  ) { }

  getData(lat:number, long:number){
    return this.http.get(`${this.API_URL}lat=${lat}&lon=${long}&appid=${this.API_KEY}`);
  }


}
