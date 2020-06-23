import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
//import { errorHandler, NotFoundError } from '@ojitickets/common';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { currentUser } from './middlewares/current-user';
import { createTicketRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.use(createTicketRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
