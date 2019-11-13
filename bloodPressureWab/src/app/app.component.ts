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
      icon: 'list'
    },
    {
      title: 'พยาบาล',
      url: '/nurse',
      icon: 'list'
    },
    {
      title: 'ผู้ป่วย',
      url: '/patient',
      icon: 'list'
    },
    {
      title: 'ผู้ดูแลระบบ',
      url: '/admin',
      icon: 'list'
    },
    {
      title: 'เพิ่มผู้ใช้งาน',
      url: '/add-user',
      icon: 'list'
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
