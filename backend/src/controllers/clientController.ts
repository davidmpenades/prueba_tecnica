import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Clients } from '../entities/Client';
import { ClientRequest, ClientResponse } from '../types/globalTypes';

export const getClients = async (
  request: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const clientRepository = AppDataSource.getRepository(Clients);

    const clients = await clientRepository.find();

    const response: ClientResponse[] = clients.map((client) => ({
      id: client.id,
      name: client.name,
      address: client.address,
      email: client.email,
      phone: client.phone,
      website: client.website,
      description: client.description,
      created_at: client.created_at,
      updated_at: client.updated_at,
    }));

    res.send(response);
  } catch (error) {
    res.status(500).send({ error: 'Error al obtener los clientes' });
  }
};

export const createClient = async (
  request: FastifyRequest<{ Body: ClientRequest }>,
  res: FastifyReply
) => {
  try {
    const clientRepository = AppDataSource.getRepository(Clients);
    const client = clientRepository.create(request.body as Partial<Clients>);

    const result = await clientRepository.save(client);

    const response: ClientResponse = {
      ...result,
    };

    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: 'Error al crear el cliente' });
  }
};

export const deleteClients = async (
  request: FastifyRequest<{ Body: { ids: number[] } }>,
  res: FastifyReply
) => {
  try {
    const { ids } = request.body;

    if (!ids || ids.length === 0) {
      return res
        .status(400)
        .send({ error: 'No se proporcionaron IDs para eliminar' });
    }

    const clientRepository = AppDataSource.getRepository(Clients);

    await clientRepository.delete(ids);

    res.send({ message: 'Clientes eliminados' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al eliminar los clientes' });
  }
};
