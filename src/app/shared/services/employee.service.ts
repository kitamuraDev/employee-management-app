import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employees } from '../types/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly http = inject(HttpClient);

  private readonly API_URL = '/api/employees';

  // 全件取得
  getAllEmployee() {
    return this.http.get<Employees[]>(this.API_URL);
  }
}
