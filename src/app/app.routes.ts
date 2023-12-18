import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component') },
  { path: 'detail/:id', loadComponent: () => import('./features/employee-detail/employee-detail.component') },
  { path: 'employees', loadComponent: () => import('./features/employees/employees.component') },
];
