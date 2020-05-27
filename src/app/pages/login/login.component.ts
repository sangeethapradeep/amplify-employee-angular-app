import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  onLoginClick() {
    // this.router.navigate(['dashboard']);
    this.spinner.show();
    Auth.federatedSignIn();
  }

}
