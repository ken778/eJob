import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecUpdatePageRoutingModule } from './rec-update-routing.module';

import { RecUpdatePage } from './rec-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecUpdatePageRoutingModule
  ],
  declarations: [RecUpdatePage]
})
export class RecUpdatePageModule {}
