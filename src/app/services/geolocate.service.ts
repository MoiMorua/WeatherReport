import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocateService {

  constructor(
    private http : HttpClient
  ) { }

  isLocationAvailable(){
    return "geolocation" in navigator;
  }

  getLocation(){

    navigator.geolocation.getCurrentPosition(function(position) {
      
    });

    return new Promise((resolve, reject)=>navigator.geolocation.getCurrentPosition(resolve,reject));
    
  }

  
}
