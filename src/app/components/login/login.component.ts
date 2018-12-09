import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMsg: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  FbLogin() {
    this.authService.doFBLogin()
    .then(res => this.router.navigate(['./user']))
  }

  GoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => this.router.navigate(['./user']))
  }

  loginUser(value) {
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/user'])
    }, err => {
      console.log(err);
      this.errorMsg = err.message
    })
  }

  goToRegister() {
    this.router.navigate(['./register'])
  }

}
