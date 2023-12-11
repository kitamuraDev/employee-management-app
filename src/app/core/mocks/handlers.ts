import { HttpResponse, http } from 'msw';
import { EmployeeDatabase } from '../db/employee-database';

const db = new EmployeeDatabase();

export const handlers = [
  http.get('/api/employees', async () => {
    const result = await db.getAllEmployee();

    return HttpResponse.json(result);
  }),
];
