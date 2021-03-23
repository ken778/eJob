import { Component } from '@angular/core';

import {} from '@angular/common/http';
import { JobFeedsService } from '../services/job-feeds.service';
import{ Ng2SearchPipeModule} from 'ng2-search-filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  filterTerm:string;
  public jobs:any;
  public jobsData:any;
  menu: any;
  constructor(private jobServices:JobFeedsService, private router: Router) {
   }

   search(){
     this.jobServices.getjobs(this.jobs).subscribe(result=>{
     console.log(result);
     this.jobsData=result['results'];
     });

   }

   userRecords = [{

    "title": "{{item.title}}"
    
  }]
   /*listern for click evant from menu functionalities*/
  ngOnInit() {
  }
  _openSideNav() {
    this.menu.enable(true,'menu-content');
    this.menu.open('menu-content')
  }
  /*end of listern for click evant from menu functionalities*/
  toJobs(){
    this.router.navigate(['/jobs']);
 }

 

   
  }

   
    
  

  


