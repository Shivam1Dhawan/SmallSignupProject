import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/emailvalidator';
import { Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
   det:any;
   signupForm:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    
  this.initializeForm();
}
initializeForm()
  {
    this.signupForm=this.formBuilder.group({
      email:['',Validators.compose([Validators.required, EmailValidator.isValid])],
      name:['',Validators.compose([Validators.required])],
      residence:['',Validators.compose([Validators.required])]
  })
  }

  
sendsigndetails(){
  this.navCtrl.push(HomePage,{profile:this.signupForm});
}
}