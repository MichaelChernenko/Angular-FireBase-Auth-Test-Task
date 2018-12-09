import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(
        public auth: AngularFireAuth,
        public userService: UserService,
        private router: Router
    ) {}

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
            .then(user => {
                return resolve(true);
            }, err => {
                this.router.navigate(['./login'])
                return resolve(true)
            })
        })
    }
}