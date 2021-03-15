import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalPagePageRoutingModule } from './paypal-page-routing.module';

import { PaypalPagePage } from './paypal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalPagePageRoutingModule
  ],
  declarations: [PaypalPagePage]
})
export class PaypalPagePageModule {}
