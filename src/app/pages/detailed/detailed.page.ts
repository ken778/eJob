import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {

  constructor(private toastr: ToastController,private _route : ActivatedRoute,private _data: JobService, private router: Router,private auth:AuthService,private afs:AngularFirestore ) { }
  joID:any;
  job:any;
  ngOnInit() {
      this.joID = this._route.snapshot.paramMap.get('ref');
      console.log(this.joID);

      //getting single job data
      this.job = this._data.getJobInfo(this.joID).subscribe((i) => {
        this.job = i;
        console.log(this.job);
      });
  
  }

  apply(id){
    let date = new Date()
    let DateCreated = date;
    let createdAt = date.getTime();
    
    this.auth.LogedUser().subscribe(res=>{
      this.afs.collection('user', _ref => _ref.where('userId','==',res.uid)).valueChanges().subscribe( _res => {
        _res.map( action => {
          const data = action as User;
           console.log(data)

      const ApplicationData : any = {
        'userID': res.uid,
        'DateApplied': DateCreated,
        'createdAt' : createdAt,
        'job_ID': this.joID,
        'name' : data.name,
        'surname' : data.surname,
        'recruId': id,
        'email':data.email,
        

      }

            //code to send data to applications collection
            this.afs.collection('applications').add(ApplicationData).then(()=>{
            console.log('applied')
          }).catch(error=>{
            console.log('something went wrong!')
            console.log(error.messsage)
          })
        
          })
        })
      })
    console.log(id)
    //this.router.navigate(['/application-form',this.joID,this.joID ])
    this.toast('Application submitted','success').then(()=>{
      this.router.navigate(['/jobs'])
    })
  }


  toJobs(){
    this.router.navigate(['/jobs'])
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

}
