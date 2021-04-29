import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.page.html',
  styleUrls: ['./uploadimage.page.scss'],
})
export class UploadimagePage implements OnInit {

  details:any;
  name:any;
  surname:any;
  email:any;
  id:any;
  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router, private toastr: ToastController) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        this.details = element;
        //console.log(res.uid);
      
      })
      this.database.collection('user').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 
    
  }
  update(){
    this.auth.LogedUser().subscribe(res=>{
      this.auth.GetUsers().doc(res.uid).update({
         
          "name":this.name,
           'surname':this.surname
        
       

      }).then(()=>{
     this.toast("Details updated successfuy","success")
      this.router.navigate(['/profile'])
      }).catch(error=>{
       this.toast("something went wrong","danger!")
      })
    })
 }
 async toast(message, status){
  const toast = await this.toastr.create({
    message: message,
    position: 'top',
    color: status,
    duration: 2000
  })
  toast.present()

}
AddUsers(UserData:NgForm){
  this.auth.LogedUser().subscribe(res=>{
    res.uid;
    this.id = res.uid;
    this.auth.UpdateStudentInfo(this.id,UserData.value);
  })
  
  
}

}
