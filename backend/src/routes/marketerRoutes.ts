import { FastifyInstance } from 'fastify';
import {
  createMarketer,
  deleteMarketers,
  getMarketers,
} from '../controllers/marketerController';

export const marketerRoutes = async (app: FastifyInstance) => {
  app.get('/marketers', getMarketers);
  app.post('/marketers', createMarketer);
  app.delete('/marketers', deleteMarketers);
};
