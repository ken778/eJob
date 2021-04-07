import { JobService } from './../../services/job.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.page.html',
  styleUrls: ['./post-job.page.scss'],
})
export class PostJobPage implements OnInit {
  Ref:any;
  job:any;  
  constructor(private router: Router,public _route: ActivatedRoute, private _data:AuthService,private afs: AngularFirestore, private jobser:JobService) { }

  ngOnInit() {
    
      this._data.LogedUser().subscribe(res=>{
        res.uid
        
        this.afs.collection('jobs',ref=> ref.where('id_recruiter','==',res.uid)).valueChanges().subscribe(dat=>{
          console.log(dat);
          this.job=dat;
        })

   
        
      
      }) 
  }

  toPay(){
    this.router.navigate(['/post'])
  }
  post(){
  this.router.navigate(['/posting']);
  }

  //deleting job
  delete(){
    this.Ref = this._route.snapshot.paramMap.get('ref');
    this.jobser.DeleteJob(this.Ref);
  }

}
