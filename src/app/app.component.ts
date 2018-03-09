import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { MainWindowPage } from '../pages/main-window/main-window';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = 'MainWindowPage';
        }
          else{
            this.rootPage = 'LoginPage';
          }
      });
      
    });
  }

  cerrarSesion(){
    this.auth.logout();
  }
}

