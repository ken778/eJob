import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  id:any;

  constructor(private toastr: ToastController,private _jobData: JobService,private auth:AuthService,private _afa: AngularFirestore, private router: Router) { }

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
            'location':JobData.value.location,
            'dsc' : JobData.value.description,
            'closeDate':JobData.value.closeDate,
            'date_created' : DateCreated,
            'createdAt' : createdAt
          }
          //post job
          console.log(jobData)

          this._afa.collection('jobs').add(jobData).then( () => {
            console.log('job posted')
            this.toast('Job Posted','success')
            this.router.navigate(['/employer'])
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


  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    })
    toast.present()
  }//end of toast
  back(){
    this.router.navigate(['/employer'])
  }

}
