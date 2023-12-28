import { Injectable } from '@angular/core';
import { EmployeeDatabaseInstance } from '../../../core/db/employee-database-instance';
import { Employees } from '../../types/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly db = new EmployeeDatabaseInstance();

  // 初期データの注入
  async init(): Promise<void> {
    await this.db.employees.bulkAdd([
      { name: '武山 岳大' },
      { name: '駒倉 光紀' },
      { name: '長田 研太' },
      { name: '高藤 友梨香' },
      { name: '浜崎 貴之' },
      { name: '緑川 睦' },
      { name: '森谷 怜奈' },
      { name: '大槻 祐大' },
      { name: '岩野 紀之' },
      { name: '佐々木 小次郎' },
    ]);
  }

  // 全件取得
  async getAllEmployee(): Promise<Employees[]> {
    return await this.db.employees.toArray();
  }

  // 単件取得
  async getEmployee(id: number): Promise<Employees> {
    const employee = await this.db.employees.get(id);

    if (!employee) throw new Error('指定したIDの社員は見つかりませんでした');

    return employee;
  }

  // 追加
  async addEmployee(form: string): Promise<Employees> {
    const postedId = await this.db.employees.add({ name: form });
    const postedRecord = await this.getEmployee(postedId);

    return postedRecord;
  }

  // 編集
  async editEmployee(form: string, editId: number): Promise<void> {
    await this.db.employees.update(editId, { name: form });
  }

  // 削除
  async deleteEmployee(id: number): Promise<void> {
    await this.db.employees.delete(id);
  }

  // 検索
  async searchEmployee(name: string): Promise<Employees[]> {
    return await this.db.employees.where({ name }).toArray();
  }
}
