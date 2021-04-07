import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecProfilePageRoutingModule } from './rec-profile-routing.module';

import { RecProfilePage } from './rec-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecProfilePageRoutingModule
  ],
  declarations: [RecProfilePage]
})
export class RecProfilePageModule {}
