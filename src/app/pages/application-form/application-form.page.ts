import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireStorage} from '@angular/fire/storage'
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { __rest } from 'tslib';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.page.html',
  styleUrls: ['./application-form.page.scss'],
})
export class ApplicationFormPage implements OnInit {

  name:any;
  LastName:any;
  email:any;

  joID:any;
  job:any;
  path:string;
  constructor(private _route : ActivatedRoute,private _data: JobService, private router: Router,private afs:AngularFirestore, private auth:AuthService, private af: AngularFireStorage) { }

  ngOnInit() {

    this.auth.LogedUser().subscribe(res=>{
      this.afs.collection('user').doc(res.uid).valueChanges().subscribe(data=>{
        //console.log(data);
     
         
       })
    })
   
   
 
  }//End of ngonIt

     //sending application
      Apply(ApplicationData:NgForm){

        const _Ref = this._route.snapshot.paramMap.get('ref')
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
              'job_ID': _Ref,
              'name' : data.name,
              'surname' : data.surname

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
          
          //uploading file to storage
          this.af.upload("/files"+Math.random()+this.path,this.path).then(e => {
            
          })
      
        
      }//end of a form





      /*apply(){
       
      }*/

      //selecting a file to upload
      upload($event){
        this.path = $event.target.files[0];
      }
        
    
}
