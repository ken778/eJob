import { environment } from './../../environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public _fire: AngularFirestore, public route: Router,public afauth: AngularFireAuth) { }

  //getingJobs
  PickJobs(){
    return this._fire.collection('jobs');
  }

  //get Jobs
  GetJobs() {
    return this._fire.collection('users');
  }
  //get single Job data
  getJobInfo(ref) {
    return this._fire.collection('jobs').doc(ref).valueChanges();
  }
  //posting a job
  /*postJob(data){
    return this._fire.collection('job').add({
      position: 
    }).then(()=>{
      alert("addded")
    }).catch(()=>{
      alert('something went wrong');
    })
  }*/
    //delete function
    DeleteJob(ref) {
      return this._fire
        .collection('jobs')
        .doc(ref)
        .delete()
        .then((resu) => {
          console.log('deleted')
        }).catch(error=>{
          console.log(error.messsage);
        })
      
    }

}
