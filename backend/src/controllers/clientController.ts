import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Clients } from '../entities/Client';

export const getClients = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const clientRepository = AppDataSource.getRepository(Clients);

    const clients = await clientRepository.find();
    reply.send(clients);
  } catch (error) {
    reply.status(500).send({ error: 'Error al obtener los clientes' });
  }
};

export const createClient = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const clientRepository = AppDataSource.getRepository(Clients);
    const client = clientRepository.create(request.body as Partial<Clients>);

    const result = await clientRepository.save(client);
    reply.status(201).send(result);
  } catch (error) {
    reply.status(500).send({ error: 'Error al crear el cliente' });
  }
};
