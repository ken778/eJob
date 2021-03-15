import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalPagePage } from './paypal-page.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalPagePageRoutingModule {}
