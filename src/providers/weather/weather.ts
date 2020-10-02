import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = '845c100a0c7710898026779c4031d5fc';
  url: string;

  constructor(public http: HttpClient) {
    this.url = "http://api.openweathermap.org/data/2.5/weather?q="; 
  }

  getWeather(city: string){
    let reqUrl = this.url+city+"&appid="+this.apiKey;
    return this.http.get(reqUrl);
  }

}
