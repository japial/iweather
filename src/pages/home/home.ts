import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { from } from 'rxjs/observable/from';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: string;

  constructor(public navCtrl: NavController,
     private weatherProvider: WeatherProvider,
     private storage: Storage) {}

  ionViewWillEnter(){
    
    this.storage.get('location').then((val) => {

      if(val){
        this.location = val;
      }else{
        this.location = 'Dhaka,bd';
      }

      this.weatherProvider.getWeather(this.location).subscribe( weather => {
        this.weather = weather;
      });
    });
    
  }

  farToCelcius(temperature: number){
    let celcius = (temperature - 32)/ 1.8;
    return celcius.toFixed(2);
  }

}
