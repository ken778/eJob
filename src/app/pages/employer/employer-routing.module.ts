import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerPage } from './employer.page';

const routes: Routes = [
  
  {
    path: '',
    component: EmployerPage,
    children:[
      {
        path:'post-job',
        children:[
          {
            path:'',
            loadChildren: () => import('../../pages/post-job/post-job.module').then( m => m.PostJobPageModule)
          }
        ]
      },
      
      {
        path:'candidates',
        children:[
          {
            path:'',
            loadChildren: () => import('../../pages/candidates/candidates.module').then( m => m.CandidatesPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerPageRoutingModule {}
