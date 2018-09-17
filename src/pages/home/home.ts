import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  det:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.det=this.navParams.get('profile'); 
  console.log(this.det.value.name);
  console.log(this.det.value.email);

  }

}
