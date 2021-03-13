import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afauth: AngularFireAuth, private router: Router) {}

  logout(){
   this.afauth.signOut().then(()=>{
     this.router.navigate(['/login']);
   });
  
 }

}
