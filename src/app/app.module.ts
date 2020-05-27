import { DashboardPageGuard } from './pages/dashboard/dashboard.route-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { LoginPageGuard } from './pages/login/login.route-guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './interceptors/interceptor-provider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ...routedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [LoginPageGuard, DashboardPageGuard, HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
