import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component'),
    data: { title: 'ダッシュボード' },
  },
  { path: 'detail/:id', loadComponent: () => import('./features/employee-detail/employee-detail.component') },
  {
    path: 'employees',
    loadComponent: () => import('./features/employees/employees.component'),
    data: { title: '社員一覧' },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component'),
    data: { title: '404 Not Found' },
  },
];
