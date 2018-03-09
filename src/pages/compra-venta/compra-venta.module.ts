import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompraVentaPage } from './compra-venta';

@NgModule({
  declarations: [
    CompraVentaPage,
  ],
  imports: [
    IonicPageModule.forChild(CompraVentaPage),
  ],
})
export class CompraVentaPageModule {
}
