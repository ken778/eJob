import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationSuccesPage } from './application-succes.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationSuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationSuccesPageRoutingModule {}
