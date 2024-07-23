import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inici',
        loadComponent: () => import('./pages/home/home.component'),
    },
    {
        path: 'esdeveniments',
        loadComponent: () => import('./pages/events/events.component'),
    },
    {
        path: 'botiga',
        loadChildren: () => import('./pages/store/store.routes'),
    },
    {
        path: 'qui-som',
        loadComponent: () => import('./pages/about-us/about-us.component'),
    },
    {
        path: 'contacte',
        loadComponent: () => import('./pages/contact/contact.component'),
    },
    { path: '', redirectTo: 'inici', pathMatch: 'full' },
    { path: '**', redirectTo: 'inici', pathMatch: 'full' }
];
