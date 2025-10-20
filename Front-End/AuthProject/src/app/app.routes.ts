import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('../components/login/login.component').then(m => m.LoginComponent),
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadComponent: () => import('../components/register/register.component').then(m => m.RegisterComponent),
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadComponent: () => import('../components/profile/profile.component').then(m => m.ProfileComponent),
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
