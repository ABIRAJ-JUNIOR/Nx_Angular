import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('../../libs/products/src/lib/products/products').then(
        (m) => m.Products
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('../../libs/orders/src/lib/orders/orders').then(
        (m) => m.Orders
      ),
  },
];
