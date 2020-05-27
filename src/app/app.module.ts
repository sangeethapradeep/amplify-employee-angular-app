import { AuthGuard } from './pages/auth.route-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { LoginPageGuard } from './pages/login/login.route-guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './interceptors/interceptor-provider';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { CommandComponent } from './pages/command/command.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
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
  providers: [LoginPageGuard, AuthGuard, HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
