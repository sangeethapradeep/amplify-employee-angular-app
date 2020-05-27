import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;
  selectedType = 'Query';

  constructor() { }

  ngOnInit() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.email = user.attributes.email;
      })
      .catch(() => console.log('Not signed in'));
  }

  async onLogoutClick() {

    console.log('Logout Clicked');

    await Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
