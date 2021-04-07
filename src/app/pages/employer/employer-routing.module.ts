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
        path: '',
        redirectTo: 'post-job',
        pathMatch: 'full'
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
      {
        path:'rec-profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../../pages/rec-profile/rec-profile.module').then( m => m.RecProfilePageModule)
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
