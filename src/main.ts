import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const prepare = async () => {
  const { EmployeeService } = await import('./app/shared/services/employee/employee.service');
  const employeeService = new EmployeeService();

  const length = await (await employeeService.getAllEmployee()).length;

  // DB長が1より小さい（つまり0）時に初期データを注入する
  if (length < 1) {
    await employeeService.init();
  }
};

prepare()
  .then(() => {
    bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error(err));
