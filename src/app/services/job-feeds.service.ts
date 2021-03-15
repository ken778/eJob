import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;



@Injectable({
  providedIn: 'root'
})
export class JobFeedsService {


  url="https://api.adzuna.com/v1/api/jobs/za/search/2?app_id=ecefb1ee&app_key=6722c7187c3929978568f2fddade8894&results_per_page=50&location0=South%20Africa&max_days_old=28&sort_by=relevance"
  constructor(private http:HttpClient,public _fire: AngularFirestore, public afauth: AngularFireAuth) { }

  getjobs(jobs){
    return this.http.get(this.url);
  }
}
