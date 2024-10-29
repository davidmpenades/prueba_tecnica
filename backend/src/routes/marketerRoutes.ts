import { FastifyInstance } from 'fastify';
import { getMarketers } from '../controllers/marketerController';

export const marketerRoutes = async (app: FastifyInstance) => {
  app.get('/marketers', getMarketers);
};
