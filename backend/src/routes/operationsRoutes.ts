import { FastifyInstance } from 'fastify';
import { getOperations } from '../controllers/operationController';

export const operationRoutes = async (app: FastifyInstance) => {
  app.get('/operations', getOperations);
};
