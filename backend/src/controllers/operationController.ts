import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Clients } from '../entities/Client';
import { Marketers } from '../entities/Marketer';
import { Operations } from '../entities/Operation';

export const getOperations = async (
  request: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const operationRepository = AppDataSource.getRepository(Operations);
    const operations = await operationRepository.find();
    res.send(operations);
  } catch (error) {
    res.status(500).send({ error: 'Error al obtener las operaciones' });
  }
};

export const createOperation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const {
      type,
      amount,
      price,
      marketer: marketerId,
      client: clientId,
    } = request.body as {
      type: 'compra' | 'venta';
      amount: number;
      price: number;
      marketer: number;
      client: number;
    };

    const marketer = await AppDataSource.getRepository(Marketers).findOneBy({
      id: marketerId,
    });
    const client = await AppDataSource.getRepository(Clients).findOneBy({
      id: clientId,
    });

    if (!marketer || !client) {
      return reply
        .status(400)
        .send({ error: 'Marketer o Client no encontrado' });
    }

    const operation = new Operations();
    operation.marketer = marketer;
    operation.client = client;
    operation.type = type;
    operation.amount = amount;
    operation.price = price;

    const result = await AppDataSource.getRepository(Operations).save(
      operation
    );
    reply.status(201).send(result);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Error al crear la operación' });
  }
};
