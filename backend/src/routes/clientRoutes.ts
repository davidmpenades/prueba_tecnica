import { FastifyInstance } from 'fastify';
import { getClients } from '../controllers/clientController';

export const clientRoutes = async (app: FastifyInstance) => {
  app.get('/clients', getClients);
};
