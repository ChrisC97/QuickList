import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';
import { ChecklistDataService } from './services/checklist-data.service';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform, private dataService: ChecklistDataService) {
    this.dataService.load();

    SplashScreen.hide().catch(err => {
      console.warn(err);
    });

    StatusBar.hide().catch(err =>{
      console.warn(err);
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }
}
