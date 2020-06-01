import express, { response } from 'express';

const app = express();

app.use('/users', (request, response) => {
  response.json({ hello: 'world' });
});

app.listen(3333);
