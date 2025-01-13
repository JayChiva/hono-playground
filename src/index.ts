import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(logger());
app.get('/', (c) => {
  return c.text('Hello Hono!');
});
app.get('/hello', (c) => {
  return c.text('Hello !');
});
app.get('/404', (c) => {
  return c.text('404 NOT FOUND', { status: 404 });
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
