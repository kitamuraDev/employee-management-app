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

  // 単件取得
  async getEmployee(id: number) {
    return await this.dbService.getEmployee(id);
  }

  // 追加
  async addEmployee(form: string) {
    return await this.dbService.addEmployee(form);
  }

  // 編集
  async editEmployee(form: string, editId: number) {
    await this.dbService.editEmployee(form, editId);
  }

  // 削除
  async deleteEmployee(id: number) {
    await this.dbService.deleteEmployee(id);
  }

  // 検索
  async searchEmployee(name: string) {
    return await this.dbService.searchEmployee(name);
  }
}
