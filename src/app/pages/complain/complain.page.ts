import { User } from './../../models/user';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.page.html',
  styleUrls: ['./complain.page.scss'],
})
export class ComplainPage implements OnInit {

  subject: string;
  complain: string;
 

  constructor(private afs: AngularFirestore,private serv: AuthService, private afauth: AngularFireAuth, private loadingCtrl: LoadingController, private toastr: ToastController, private router: Router) { }

  ngOnInit() {
  }
 
   //adding extra info
   AddInfo(){
    return this.afs.collection('complain').doc('users/${user.uid}').set({
      'subject': this.subject,
      'complain': this.complain
    }).then(()=>{
      alert('successfully added')
    }).catch(()=>{
      alert('something went wrong')
    })
  
      
  }

}
