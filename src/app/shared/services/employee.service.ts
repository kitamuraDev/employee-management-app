import { Injectable, inject } from '@angular/core';
import { EmployeeDatabaseService } from '../../core/db/employee-database.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly dbService = inject(EmployeeDatabaseService);

  // 全件取得
  async getAllEmployee() {
    return this.dbService.getAllEmployee();
  }

  // 追加
  async addEmployee(form: string) {
    return await this.dbService.addEmployee(form);
  }
}
