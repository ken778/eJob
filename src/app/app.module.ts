import { JobService } from './services/job.service';
import { JobFeedsService } from './services/job-feeds.service';
import { environment } from './../environments/environment';
import { HttpClientModule} from '@angular/common/http';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms'

//firebase
import{ AngularFireModule} from '@angular/fire'
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore'

//enviremonment
import {} from '../environments/environment.prod';

//services
import {AuthService} from './services/auth.service';

//gurds
import {AuthGuard} from './guards/auth.guard'

//
import{ Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  FormsModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,
  Ng2SearchPipeModule
],
  providers: [
    AuthService,
    JobService,
    JobFeedsService,
    AuthGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
