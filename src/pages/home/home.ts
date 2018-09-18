import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  det:any;
  characterdetail:any=[]
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.det=this.navParams.get('profile'); 
    this.characterdetail=[
      {name: "Jon Snow" , url:"assets/imgs/jon.png" ,likes: 15 , Comment: 3},
      {name: "Danaerys Stormborn" , url:"assets/imgs/khaleesi.jpg" ,likes: 6 , Comment: 30},
      
  
    ]
  console.log(this.det.value.name);
  console.log(this.det.value.email);

  }

}
