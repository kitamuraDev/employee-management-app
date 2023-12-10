import { HttpResponse, http } from 'msw';
import { EmployeeDatabase } from '../db/employee-database';

const db = new EmployeeDatabase();

export const handlers = [
  // 初期データを取得するエンドポイント
  http.get('/init', async () => {
    await db.initDatabase();
    const result = await db.getAllEmployee();

    return HttpResponse.json(result);
  }),
];
