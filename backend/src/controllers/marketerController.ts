import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Marketers } from '../entities/Marketer';

export const getMarketers = async (
  request: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const marketerRepository = AppDataSource.getRepository(Marketers);

    const marketers = await marketerRepository.find();
    res.send(marketers);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Error al obtener las comercializadoras' });
  }
};

export const createMarketer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const marketerRepository = AppDataSource.getRepository(Marketers);
    const marketer = marketerRepository.create(
      request.body as Partial<Marketers>
    );

    const result = await marketerRepository.save(marketer);
    reply.status(201).send(result);
  } catch (error) {
    reply.status(500).send({ error: 'Error al crear la comercializadora' });
  }
};
