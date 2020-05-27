import { LoginPageGuard } from './pages/login/login.route-guard';
import { VerifyComponent } from './pages/verify/verify.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardPageGuard } from './pages/dashboard/dashboard.route-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginPageGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardPageGuard]
  },
  {
    path: 'verify',
    component: VerifyComponent,
    canActivate: [LoginPageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponent = [LoginComponent, DashboardComponent, VerifyComponent];
