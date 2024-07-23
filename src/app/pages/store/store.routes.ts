import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./store.component'),
  },
  {
    path: 'detall-producte/:id',
    loadComponent: () => import('./product-detail/product-detail.component'),
  },
];

export default routes;