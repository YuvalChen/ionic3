// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
// }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error =>  this.errorMessage = <any>error);
  }

}
