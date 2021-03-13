import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'complaints',
        pathMatch: 'full'
      },
      {
        path:'complaints',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/complaints/complaints.module').then( m => m.ComplaintsPageModule)
          }
        ]
      },
      {
        path:'about',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
