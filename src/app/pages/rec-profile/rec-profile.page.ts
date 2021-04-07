import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rec-profile',
  templateUrl: './rec-profile.page.html',
  styleUrls: ['./rec-profile.page.scss'],
})
export class RecProfilePage implements OnInit {


  details:any;
  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router) { }

  ngOnInit() {
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
  }

  toJobs(){
    this.router.navigate(['/employer'])
  }
  logout(){
    this.auth.logout();
  }

}
