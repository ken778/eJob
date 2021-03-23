import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  id:any;

  constructor(private _jobData: JobService,private auth:AuthService,private _afa: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
     this.id=res.uid;
    })
    
 }
  
  job(JobData:NgForm){
    return this._afa.collection('job').add({
      position:JobData.value.position,
      description:JobData.value.description,
      userID: this.id
    }).then(()=>{
      alert('added')
     this.router.navigate(['/post-job'])
    }).catch(()=>{
      alert('something went wrong')
    })
  }

}
