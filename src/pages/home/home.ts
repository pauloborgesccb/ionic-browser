import { Component } from '@angular/core';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  host: string = 'localhost';
  port: string= '8100';

  constructor(private iab: InAppBrowser) {}

  openUrl() {
      if (!this.port || !this.port) {
          alert('Informe host e porta');
          return;
      }
      const browser = this.iab.create(
          'http://' + this.host + ':' + this.port,
          '_self',
          {location: 'no',toolbar: 'no'}
      );
      browser.show();
  }

}
