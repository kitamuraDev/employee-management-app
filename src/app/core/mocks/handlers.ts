import { HttpResponse, http } from 'msw';
import { EmployeeDatabaseService } from '../db/employee-database.service';

const db = new EmployeeDatabaseService();

export const handlers = [
  http.get('/api/employees', async () => {
    const result = await db.getAllEmployee();

    return HttpResponse.json(result);
  }),
];
