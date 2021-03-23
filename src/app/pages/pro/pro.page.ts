import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss'],
})
export class ProPage implements OnInit {
  details:any;

  constructor(private _data:AuthService,private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this._data.LogedUser().subscribe(res=>{
      res.uid
      this._data.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        this.details = element;
        //console.log(res.uid);
      
      })
      this.afs.collection('user').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 
   
  }

  logout(){
    this._data.logout();
  }
  toPost(){
    this.router.navigate(['/post'])
  }


 
} 
