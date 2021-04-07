import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import {switchMap} from 'rxjs/operators'




import {firebase} from '@firebase/app'
import '@firebase/auth';



@Injectable()
export class AuthService {

  user$:Observable<User>;
  user:User;
 
  subject : string;
  role: string;

  currentUser:any;

  constructor(private afauth:AngularFireAuth, private afs: AngularFirestore, private router: Router, private loadingCtrl: LoadingController, private toastr: ToastController)
   { 
    /*this.afauth.onAuthStateChanged(user=>{
     // console.log('changed: ', user);
      this.currentUser = user;
      //console.log(this.currentUser)
    })*/

   
   }
  

   //current user
   LogedUser(){
     return this.afauth.authState;
   }
   

   async login(email, pass){
     const loading = await this.loadingCtrl.create({
       message: 'Authenticating..',
       spinner: 'crescent',
       showBackdrop: true
     })
      
     loading.present();

     this.afauth.signInWithEmailAndPassword(email,pass).then((data)=>{
       if(!data.user.emailVerified)
       {
         loading.dismiss();
         this.toast('Please verify your email', 'danger');
         this.logout();
       }
     })
     loading.dismiss();
   }//end of login

   //logout
   logout(){
     this.afauth.signOut().then(()=>{
       this.router.navigate(['/login']);
     })
   }

   async toast(message, status){
     const toast = await this.toastr.create({
       message:message,
       position: 'top',
       color:status,
       duration: 2000
     })

     toast.present();
   }// end of toast
  
   Googlelogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afauth.signInWithPopup(provider).then(()=>{
      this.router.navigate(['/home'])
    }).catch((err)=>{
      console.log('err',err.message);
    })
  }

   //get users
   GetUsers() {
    return this.afs.collection('user');
  }

  

    

}

