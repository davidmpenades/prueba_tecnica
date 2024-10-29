import { FastifyInstance } from 'fastify';
import { createClient, getClients } from '../controllers/clientController';

export const clientRoutes = async (app: FastifyInstance) => {
  app.get('/clients', getClients);
  app.post('/clients', createClient);
};
