import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './AuthGuard/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'Post',
    loadChildren: () =>
      import('./components/post/post.module').then((m) => m.PostModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'Admission_form',
    loadChildren: () =>
      import('./components/admission/admission.module').then(
        (m) => m.AdmissionModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
