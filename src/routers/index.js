import express from 'express';
import User from './_user';
import Station from './_station';

const api = express();

api.use('/api/v1/user', User);
api.use('/api/v1/station', Station);

api.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to eranga hub',
  });
});
api.use('/', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Page not found',
  });
});

export default api;
