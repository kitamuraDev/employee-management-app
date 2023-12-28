import Dexie from 'dexie';
import { Employees } from '../../shared/types/employees';

export class EmployeeDatabaseInstance extends Dexie {
  readonly employees: Dexie.Table<Employees, number>;

  constructor() {
    // DB名
    super('employees');

    // テーブル定義
    this.version(1).stores({
      employees: '++id, name',
    });

    this.employees = this.table('employees');
  }
}
