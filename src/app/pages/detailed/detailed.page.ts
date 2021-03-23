import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {

  constructor(private _route : ActivatedRoute,private _data: JobService, private router: Router) { }
  joID:any;
  job:any;
  ngOnInit() {
      this.joID = this._route.snapshot.paramMap.get('ref');
      console.log(this.joID);

      //getting single job data
      this.job = this._data.getJobInfo(this.joID).subscribe((i) => {
        this.job = i;
        console.log(this.job);
      });
  
  }

  apply(){
    this.router.navigate(['/application-form'])
  }

}
