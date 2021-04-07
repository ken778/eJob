import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.page.html',
  styleUrls: ['./posting.page.scss'],
})
export class PostingPage implements OnInit {

  id:any;
  constructor(private _jobData: JobService,private auth:AuthService ,private _afa: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      this.id=res.uid;
     })
  }
  job(JobData:NgForm){

    let date = new Date()
    let DateCreated = date.getDate();
    let createdAt = date.getTime();

    
      //tyson
      this.auth.LogedUser().subscribe(res => {
      this._afa.collection('user', _ref => _ref.where('userId','==',res.uid)).valueChanges().subscribe( _res => {
        _res.map( action => {
          const data = action as User;
          console.log(data)

          const jobData : any = {
            'id_recruiter' : res.uid,
            'companyName': JobData.value.companyName,
            'referenceNumber': JobData.value.refNumber,
            'postName': JobData.value.postName,
            'contractType':JobData.value.contractType,
            'employmentType':JobData.value.employmentType,
            'no':JobData.value.no,
            'location':JobData.value.location,
            'dsc' : JobData.value.description,
            'closeDate':JobData.value.closeDate,
            'date_created' : DateCreated,
            'createdAt' : createdAt
          }
          //post job

          this._afa.collection('jobs').add(jobData).then( () => {
            console.log('job posted')
          }).catch( err => {
            console.log(err.message)
          })

        })
      })
      })



    /*return this._afa.collection('job').add({
      position:JobData.value.position,
      description:JobData.value.description,
      userID: this.id
    }).then(()=>{
      alert('added')
     this.router.navigate(['/post-job'])
    }).catch(()=>{
      alert('something went wrong')
    })*/
  }

}
