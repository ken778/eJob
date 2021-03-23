import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.page.html',
  styleUrls: ['./post-job.page.scss'],
})
export class PostJobPage implements OnInit {

  job:any;  
  constructor(private router: Router,private _data:AuthService,private afs: AngularFirestore) { }

  ngOnInit() {
      this._data.LogedUser().subscribe(res=>{
        res.uid
        
        this.afs.collection('job',ref=> ref.where('userID','==',res.uid)).valueChanges().subscribe(dat=>{
          console.log(dat);
          this.job=dat;
        })

   
        
      
      }) 
  }

  toPay(){
    this.router.navigate(['/pay'])
  }
  post(){
  this.router.navigate(['/post']);
  }

}
