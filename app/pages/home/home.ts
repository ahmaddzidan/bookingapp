import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  	roomType: any;
  	nights:   any;
  	rooms:    any;
  	from:     any;
  	to:       any;

  constructor(public navCtrl: NavController, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {
  	let today = new Date();
  	let tomorrow = new Date();
  	tomorrow.setDate(+1);

  	this.roomType = 'standard';
    this.nights = 1;
    this.rooms = 1;
    this.from = today.toISOString();
    this.to = tomorrow.toISOString();
  }
}
