import { FastifyInstance } from 'fastify';
import {
  createOperation,
  getOperations,
} from '../controllers/operationController';

export const operationRoutes = async (app: FastifyInstance) => {
  app.get('/operations', getOperations);
  app.post('/operations', createOperation);
};
