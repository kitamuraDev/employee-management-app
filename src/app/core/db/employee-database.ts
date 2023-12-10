import Dexie from 'dexie';
import { Employees } from '../../shared/types/employees';

export class EmployeeDatabase extends Dexie {
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
  async initDatabase() {
    return await this.employees.bulkAdd([
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
}
