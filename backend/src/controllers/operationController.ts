import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Clients } from '../entities/Client';
import { Marketers } from '../entities/Marketer';
import { Operations } from '../entities/Operation';
import { OperationRequest, OperationResponse } from '../types/globalTypes';

export const getOperations = async (
  request: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const operationRepository = AppDataSource.getRepository(Operations);
    const operations = await operationRepository.find();

    const response: OperationResponse[] = operations.map((operation) => ({
      id: operation.id,
      type: operation.type,
      amount: operation.amount,
      price: operation.price,
      marketer: {
        id: operation.marketer.id,
        name: operation.marketer.name,
      },
      client: {
        id: operation.client.id,
        name: operation.client.name,
      },
      created_at: operation.created_at,
      updated_at: operation.updated_at,
    }));

    res.send(response);
  } catch (error) {
    res.status(500).send({ error: 'Error al obtener las operaciones' });
  }
};

export const createOperation = async (
  request: FastifyRequest<{ Body: OperationRequest }>,
  res: FastifyReply
) => {
  try {
    const {
      type,
      amount,
      price,
      marketer: marketerId,
      client: clientId,
    } = request.body;

    const marketer = await AppDataSource.getRepository(Marketers).findOneBy({
      id: marketerId,
    });
    const client = await AppDataSource.getRepository(Clients).findOneBy({
      id: clientId,
    });

    if (!marketer || !client) {
      return res.status(400).send({ error: 'Marketer o Client no encontrado' });
    }

    const operation = new Operations();
    operation.type = type;
    operation.amount = amount;
    operation.price = price;
    operation.marketer = marketer;
    operation.client = client;

    const result = await AppDataSource.getRepository(Operations).save(
      operation
    );
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al crear la operación' });
  }
};

export const deleteOperations = async (
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

    const operationRepository = AppDataSource.getRepository(Operations);

    await operationRepository.delete(ids);

    res.send({ message: 'Operaciones eliminadas' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al eliminar las operaciones' });
  }
};
