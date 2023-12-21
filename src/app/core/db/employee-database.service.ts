import Dexie from 'dexie';
import { Employees } from '../../shared/types/employees';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDatabaseService extends Dexie {
  private employees: Dexie.Table<Employees, number>;

  constructor() {
    // DB名
    super('employees');

    // テーブル定義
    this.version(1).stores({
      employees: '++id, name',
    });

    this.employees = this.table('employees');
  }

  // 初期データの注入
  async init() {
    await this.employees.bulkAdd([
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
  async getAllEmployee() {
    return await this.employees.toArray();
  }

  // 単件取得
  async getEmployee(postedId: number) {
    const employee = await this.employees.get(postedId);

    if (!employee) throw new Error('指定したIDの社員は見つかりませんでした');

    return employee;
  }

  // 追加
  async addEmployee(form: string) {
    const postedId = await this.employees.add({ name: form });
    const postedRecord = await this.getEmployee(postedId);

    return postedRecord;
  }

  // 編集
  async editEmployee(form: string, editId: number) {
    await this.employees.update(editId, { name: form });
  }

  // 削除
  async deleteEmployee(id: number) {
    await this.employees.delete(id);
  }

  // 検索
  async searchEmployee(name: string) {
    return await this.employees.where({ name }).toArray();
  }
}
