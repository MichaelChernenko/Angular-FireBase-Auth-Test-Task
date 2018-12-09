import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public auth: AngularFireAuth,
        public userService: UserService,
        private router: Router
    ) {}

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
            .then(user => {
                this.router.navigate(['./user']);
                return resolve(false);
            }, err => {
                console.log(err)
                return resolve(true)
            })
        })
    }
}