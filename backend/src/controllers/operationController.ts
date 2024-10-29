import { FastifyRequest, FastifyReply } from 'fastify';
import { AppDataSource } from '../db/config';
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
