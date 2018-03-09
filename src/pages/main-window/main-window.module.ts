import { NgModule } from '@angular/core';
import { IonicPageModule, AlertController, NavController, NavParams } from 'ionic-angular';
import { MainWindowPage } from './main-window';
import { AuthProvider } from '../../providers/auth/auth';
import { OfertasEmpleoPageModule } from '../ofertas-empleo/ofertas-empleo.module';
import { OfertasEmpleoPage } from '../ofertas-empleo/ofertas-empleo';

@NgModule({
  declarations: [
    MainWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(MainWindowPage),
  ],
})

export class MainWindowPageModule {

}
