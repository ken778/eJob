import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.page.html',
  styleUrls: ['./candidates.page.scss'],
})
export class CandidatesPage implements OnInit {

  application:any;
  constructor(private _data:AuthService,private afa:AngularFirestore,private auth:AngularFireAuth) { }

  ngOnInit() {
    this._data.LogedUser().subscribe(res=>{
      res.uid
      
      this.afa.collection('applications',ref=> ref.where('recruId','==',res.uid)).valueChanges().subscribe(dat=>{
        console.log(dat);
        this.application=dat;
      })

 
      
    
    }) 

}

}
