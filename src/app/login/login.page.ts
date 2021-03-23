import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password : string;
  role:string;

  constructor(private router: Router,private afs: AngularFirestore, private authent: AngularFireAuth, private auth : AuthService, private toastr : ToastController, private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['/register']);
  }// end og register

 forgot(){
   this.router.navigate(['/forgot-password']);
 }//end of forgot password

 async login(){
   if(this.email && this.password){
     const loading = await this.loadingCtrl.create({
       message: 'Please wait..',
       spinner: 'crescent',
       showBackdrop: true
     })
     loading.present();
     this.auth.login(this.email, this.password).then(()=>{
      if(this.role==='recruiter'){
        console.log('login success'),
        loading.dismiss();
        this.router.navigate(['/employer']);
       }else if
         (this.role==='job seeker'){
          console.log('login success'),
          loading.dismiss();
          this.router.navigate(['/jobs']);
         }
       loading.dismiss();
     }).catch((error)=>{
       loading.dismiss();
       this.toast(error.message, 'danger');
     })
   }else{
     this.toast("Please enter your email and password", 'danger');
   }
 }

 async toast(message, status){
   const toast = await this.toastr.create({
     message: message,
     cssClass: 'custom',
     position: 'bottom',
     color: status,
     duration: 2000
   })   
   toast.present();  

 }
 Googlelogin(){
   this.auth.Googlelogin();
 }

}

