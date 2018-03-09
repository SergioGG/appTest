import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { OfertasEmpleoPage } from '../ofertas-empleo/ofertas-empleo';
import { CompraVentaPage } from '../compra-venta/compra-venta';

/**
 * Generated class for the MainWindowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-window',
  templateUrl: 'main-window.html',
})
export class MainWindowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainWindowPage');
  }

  irOfertasEmpleo(){
    this.navCtrl.push(OfertasEmpleoPage);
  }

  irCompraVenta(){
    this.navCtrl.push(CompraVentaPage);
  }

  cerrarSesion(){
    this.auth.logout();
  }

}
