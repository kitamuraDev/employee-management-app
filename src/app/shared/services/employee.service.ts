import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employees } from '../types/employees';
import { EmployeeDatabaseService } from '../../core/db/employee-database.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly dbService = inject(EmployeeDatabaseService);

  private readonly API_URL = '/api/employees';

  // 全件取得
  getAllEmployee() {
    return this.http.get<Employees[]>(this.API_URL);
  }

  // 追加
  async addEmployee(form: string) {
    return await this.dbService.addEmployee(form);
  }
}
