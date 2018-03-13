import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ResetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html',
})
export class ResetPassPage {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public nav: NavController,
    public alertCtrl: AlertController
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ResetPasswordPage Page');
  }

  resetPassword(){
    console.log("Email:" + this.myForm.value.email);
    
    this.afAuth.auth.sendPasswordResetEmail(this.myForm.value.email)
    .then((user) => {
      let alert = this.alertCtrl.create({
        message: "Te enviamos un link a tu correo.",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            handler: () => {
              this.nav.pop();
            }
          }
        ]
      });
      alert.present();
    }, (error) => {
      var errorMessage: string = error.message;
      let errorAlert = this.alertCtrl.create({
        message: errorMessage,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      errorAlert.present();
    });
  }

}