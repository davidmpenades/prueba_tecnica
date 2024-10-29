import Fastify from 'fastify';
import 'reflect-metadata';
import { AppDataSource } from './db/config';
import { marketerRoutes } from './routes/marketerRoutes';
import { operationRoutes } from './routes/operationsRoutes';

const app = Fastify({ logger: true });

const start = async () => {
  try {
    await AppDataSource.initialize();
    app.log.info('Connected to the database');

    app.register(marketerRoutes);
    app.register(operationRoutes)

    await app.listen({ port: 3001 });
    app.log.info(`Server listening at http://localhost:3001`);
  } catch (error) {
    app.log.error('Error during Data Source initialization', error);
    process.exit(1);
  }
};

start();
