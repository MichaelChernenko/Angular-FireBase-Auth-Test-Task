import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(
    public authService: AuthService,
    private location: Location
  ) { }

  logOut() {
    this.authService.doLogOut()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error)
    })
  }

}
