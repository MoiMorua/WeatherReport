import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpGeolocateApiRequestService {

  URL_GET_IP = "https://api.ipify.org?format=json";
  
  KEY_GEOLOCATE = "at_fhKo8ch13tz2kDoaqOzytUuPxAB9H";
  URL_GEOLOCATE = `https://geo.ipify.org/api/v1?apiKey=${this.KEY_GEOLOCATE}&ipAddress=`;



  constructor(
    private http: HttpClient
  ) { }

  getCurrentIp(){
    return this.http.get(this.URL_GET_IP);
  }

  getCurrentLocation(ip:string){
    
    return this.http.get(this.URL_GEOLOCATE+ip);
  }


}
