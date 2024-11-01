import { FastifyInstance } from 'fastify';
import {
  createOperation,
  deleteOperations,
  getOperations,
} from '../controllers/operationController';

export const operationRoutes = async (app: FastifyInstance) => {
  app.get('/operations', getOperations);
  app.post('/operations', createOperation);
  app.delete('/operations', deleteOperations);
};
