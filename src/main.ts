import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const prepare = async () => {
  const { worker } = await import('./app/core/mocks/browser');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
};

prepare()
  .then(() => {
    bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error(err));
