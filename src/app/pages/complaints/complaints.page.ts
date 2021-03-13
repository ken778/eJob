import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  complain(){
    this.router.navigate(['/complain']);
  }

}
