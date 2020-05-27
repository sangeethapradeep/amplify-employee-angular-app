import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginPageGuard } from './pages/login/login.route-guard';
import { VerifyComponent } from './pages/verify/verify.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './pages/query/query.component';
import { AuthGuard } from './pages/auth.route-guard';
import { CommandComponent } from './pages/command/command.component';

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
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'query',
        pathMatch: 'full'
      },
      {
        path: 'query',
        component: QueryComponent
      },
      {
        path: 'command',
        component: CommandComponent
      },
    ]
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

export const routedComponent = [LoginComponent, QueryComponent, VerifyComponent, CommandComponent];
