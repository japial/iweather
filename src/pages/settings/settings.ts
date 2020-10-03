import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { from } from 'rxjs/observable/from';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  state: string;
  location: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then((val) => {
      if(val){
        this.location = val;
        let strings = this.location.split(',');
        this.city = strings[0];
        this.state = strings[1];
      }else{
        this.city = 'Dhaka';
        this.state = 'BD';
        this.location = this.city+','+this.state;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    if(this.city && this.state){
      this.location = this.city+','+this.state;
    }
    this.storage.set('location', this.location);
    this.navCtrl.push(HomePage);
  }

}
