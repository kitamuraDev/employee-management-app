import { http } from 'msw';

export const handlers = [
  http.get('/', () => {
    console.log('hello msw');
  }),
];
