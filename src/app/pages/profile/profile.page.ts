
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  [x: string]: any;
  
  profile: any;
  profileName: any;
  profileImageUrl: any;
  profileEmail: any;
  
  details:any;

  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router) {
    }
  ngOnInit(){


    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        this.details = element;
        //console.log(res.uid);
      
      })
      this.database.collection('user').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 
    



    firebase.auth().onAuthStateChanged(user=>{
      console.log("AUTH-USER",user);

      if(user){
        const result = this.database.doc(`/profile/${this.authservice.getUID()}`).collection;
        console.log(result)
        
      }
    })  
  }
  toJobs(){
     this.router.navigate(['/jobs']);
  }



}
