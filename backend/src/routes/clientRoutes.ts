import { FastifyInstance } from 'fastify';
import {
  createClient,
  deleteClients,
  getClients,
} from '../controllers/clientController';

export const clientRoutes = async (app: FastifyInstance) => {
  app.get('/clients', getClients);
  app.post('/clients', createClient);
  app.delete('/clients', deleteClients);
};
