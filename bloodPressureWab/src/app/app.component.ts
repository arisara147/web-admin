import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าหลัก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'แพทย์',
      url: '/doctor',
      icon: 'medkit'
    },
    {
      title: 'พยาบาล',
      url: '/nurse',
      icon: 'medkit'
    },
    {
      title: 'ผู้ป่วย',
      url: '/patient',
      icon: 'contact'
    },
    {
      title: 'ผู้ดูแลระบบ',
      url: '/admin',
      icon: 'person'
    },
    {
      title: 'เพิ่มผู้ใช้งาน',
      url: '/add-user',
      icon: 'person-add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
