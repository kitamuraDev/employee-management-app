import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const prepare = async () => {
  const { EmployeeDatabase } = await import('./app/core/db/employee-database');
  const { worker } = await import('./app/core/mocks/browser');

  // データベースに初期データを注入
  await new EmployeeDatabase().initDatabase();

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
};

prepare()
  .then(() => {
    bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error(err));
