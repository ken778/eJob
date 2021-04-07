import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss'],
})
export class ProPage implements OnInit {
  details:any;

  constructor( private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth : AuthService,private menu: MenuController) {
      
     }
     openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
    openEnd() {
      this.menu.open('end');
    }
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
   

      ngOnInit() {
      
          
        
      
      }


 
} 
