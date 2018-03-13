import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { MainWindowPage } from '../main-window/main-window';
import { ResetPassPage } from '../reset-pass/reset-pass';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider,
    public alertCtrl : AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Registro',
        message : "Te has registrado correctamente.",
        buttons: ['Aceptar']
      });
      alert.present();
      this.user.password = "";
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        message : "Formato de e-mail inválido.",
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  login()
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      this.navCtrl.push(MainWindowPage);
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

  gotoResetPassword(){
    this.navCtrl.push(ResetPassPage);
  }

}

