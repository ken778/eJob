import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {


   Job: any;
  jobs: any;
  Ref: any;
  constructor(public _data: JobService, public _route: ActivatedRoute) { }

  ngOnInit() {
   /*  //get Job id
     this.Ref = this._route.snapshot.paramMap.get('ref');
     console.log('Id:', this.Ref);

      //geting single job info
    this.Job = this._data.getJobInfo(this.Ref).subscribe((i) => {
      this.Job = i;
      console.log(this.Job);
    }); */

    //return Jobs
    this._data
      .GetJobs()
      .snapshotChanges()
      .subscribe((action) => {
        console.log(action);
        this.jobs = action; 
      });
      console.log('im here')
  
  }

}
