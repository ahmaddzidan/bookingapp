import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';


@Component({
  templateUrl: './build/app.html'
})
export class BookingApp {
  @ViewChild(Nav) nav:Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon :string}>;

  constructor(
      public platform: Platform,
      public menu : MenuController) {
    this.initializeApp();

    this.pages = [{ title: 'Booking Room', component: HomePage, icon : 'calendar' }];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(BookingApp);
