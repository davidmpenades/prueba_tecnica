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
