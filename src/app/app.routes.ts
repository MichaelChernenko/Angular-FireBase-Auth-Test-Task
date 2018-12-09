import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';

export const routerConfig: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',

    },
    {
        path: 'login', component: LoginComponent, canActivate: [AuthGuard]
    }, 
    {
        path: 'register', component: RegisterComponent, canActivate: [AuthGuard]
    },
    {
        path: 'user', component: UserComponent, canActivate: [UserGuard]
    }
]