import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-succes',
  templateUrl: './application-succes.page.html',
  styleUrls: ['./application-succes.page.scss'],
})
export class ApplicationSuccesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToHome(){
   this.router.navigate(['/jobs'])
  }

}
