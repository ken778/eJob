import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.page.html',
  styleUrls: ['./post-job.page.scss'],
})
export class PostJobPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toPay(){
    this.router.navigate(['/pay'])
  }

}
