import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationSuccesPageRoutingModule } from './application-succes-routing.module';

import { ApplicationSuccesPage } from './application-succes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationSuccesPageRoutingModule
  ],
  declarations: [ApplicationSuccesPage]
})
export class ApplicationSuccesPageModule {}
