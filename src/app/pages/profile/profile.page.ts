
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
  total:any;
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
 
    
      this.database
        .collection('applications', (ref) => ref.where('userID', '==', res.uid))
        .valueChanges()
        .subscribe((dat) => {
          console.log(dat);
          console.log(dat.length)
          this.total = dat.length;
        });

       
    }) 
    
    


     
  }
  toJobs(){
     this.router.navigate(['/jobs']);
  }



}
