import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

//send unauthorized users to login
const redirectUnauthorizedToLogin = ()=>
 redirectUnauthorizedTo(['/home']);

 //Automatically log in users
 const redirectLoggedInToHome = ()=> redirectLoggedInTo(['/login']);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
   
  }, 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //...canActivate(redirectUnauthorizedToLogin)
    //...canActivate(redirectLoggedInToHome) 
   
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./pages/complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'complain',
    loadChildren: () => import('./pages/complain/complain.module').then( m => m.ComplainPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'candidates',
    loadChildren: () => import('./pages/candidates/candidates.module').then( m => m.CandidatesPageModule)
  },
  {
    path: 'employer',
    loadChildren: () => import('./pages/employer/employer.module').then( m => m.EmployerPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'paypal-page',
    loadChildren: () => import('./pages/paypal-page/paypal-page.module').then( m => m.PaypalPagePageModule)
  },
  {
    path: 'post-job',
    loadChildren: () => import('./pages/post-job/post-job.module').then( m => m.PostJobPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'application-form/:ref/:id',
    loadChildren: () => import('./pages/application-form/application-form.module').then( m => m.ApplicationFormPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'detailed/:ref',
    loadChildren: () => import('./pages/detailed/detailed.module').then( m => m.DetailedPageModule)
  },
  {
    path: 'uploadimage',
    loadChildren: () => import('./pages/uploadimage/uploadimage.module').then( m => m.UploadimagePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'pro',
    loadChildren: () => import('./pages/pro/pro.module').then( m => m.ProPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'rec-profile',
    loadChildren: () => import('./pages/rec-profile/rec-profile.module').then( m => m.RecProfilePageModule)
  },
  {
    path: 'posting',
    loadChildren: () => import('./pages/posting/posting.module').then( m => m.PostingPageModule)
  },  {
    path: 'application-succes',
    loadChildren: () => import('./pages/application-succes/application-succes.module').then( m => m.ApplicationSuccesPageModule)
  },
  {
    path: 'rec-update',
    loadChildren: () => import('./pages/rec-update/rec-update.module').then( m => m.RecUpdatePageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
