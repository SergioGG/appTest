import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';
import { MainWindowPage } from '../pages/main-window/main-window';
import { MainWindowPageModule } from '../pages/main-window/main-window.module';
import { OfertasEmpleoPageModule } from '../pages/ofertas-empleo/ofertas-empleo.module';
import { CompraVentaPageModule } from '../pages/compra-venta/compra-venta.module';
import { ResetPassPageModule } from '../pages/reset-pass/reset-pass.module';

//IMPORTS PARA INSTALAR MODULO DE TRADUCCIONES
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

//EXPORT PARA USAR i18n DE TRADUCCIONES
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}

//EXPORT PARA CONECTAR CON FIREBASE
export const firebaseConfig = {
  apiKey: "AIzaSyCVZ76Q0sOQdU_YtvqJXa1SIHeQvfeLMRI",
    authDomain: "appprueba-b32f4.firebaseapp.com",
    databaseURL: "https://appprueba-b32f4.firebaseio.com",
    projectId: "appprueba-b32f4",
    storageBucket: "appprueba-b32f4.appspot.com",
    messagingSenderId: "660775764209"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    HttpClientModule,
    TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),
    MainWindowPageModule,
    OfertasEmpleoPageModule,
    CompraVentaPageModule,
    ResetPassPageModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}