import { OpenAPIHono } from '@hono/zod-openapi'
import {notFound, onError} from '@/middlewares';

const app = new OpenAPIHono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.get('/error', (c) => {
  throw new Error('test')
});

app.notFound(notFound);
app.onError(onError);

export default app