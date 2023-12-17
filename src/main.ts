import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const prepare = async () => {
  const { EmployeeDatabaseService } = await import('./app/core/db/employee-database.service');
  const dbService = new EmployeeDatabaseService();

  const length = await (await dbService.getAllEmployee()).length;

  // DB長が1より小さい（つまり0）時に初期データを注入する
  if (length < 1) {
    await dbService.init();
  }
};

prepare()
  .then(() => {
    bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error(err));
