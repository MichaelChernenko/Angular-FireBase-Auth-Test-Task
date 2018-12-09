import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.createForm()
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  GoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => this.router.navigate(['/user']), 
    err => console.log(err))
  }

  FbLogin() {
    this.authService.doFBLogin()
    .then(res => this.router.navigate(['/user']), 
    err => console.log(err))
  }

  registerUser(value) {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMsg = '';
      this.successMsg = 'Your account has been created!'
      this.router.navigate(['/user']);
    }, err => {
      console.log(err);
      this.errorMsg = err.message;
      this.successMsg = ''
    })
  }

  goToLogin() {
    this.router.navigate(['./login'])
  }

}
