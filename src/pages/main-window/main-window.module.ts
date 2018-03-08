import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainWindowPage } from './main-window';

@NgModule({
  declarations: [
    MainWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(MainWindowPage),
  ],
})
export class MainWindowPageModule {}
