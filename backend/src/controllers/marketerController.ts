import { FastifyReply, FastifyRequest } from 'fastify';
import { AppDataSource } from '../db/config';
import { Marketers } from '../entities/Marketer';
import { MarketerRequest, MarketerResponse } from '../types/globalTypes';

export const getMarketers = async (
  request: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const marketerRepository = AppDataSource.getRepository(Marketers);

    const marketers = await marketerRepository.find();

    const response: MarketerResponse[] = marketers.map((marketer) => ({
      id: marketer.id,
      name: marketer.name,
      address: marketer.address,
      email: marketer.email,
      phone: marketer.phone,
      created_at: marketer.created_at,
      updated_at: marketer.updated_at,
    }));

    res.send(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Error al obtener las comercializadoras' });
  }
};

export const createMarketer = async (
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

    const marketerRepository = AppDataSource.getRepository(Marketers);
    const marketer = marketerRepository.create(
      request.body as Partial<Marketers>
    );

    const result = await marketerRepository.save(marketer);

    const response: MarketerResponse = {
      ...result,
    };

    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: 'Error al crear la comercializadora' });
  }
};

export const deleteMarketers = async (
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

    const marketerRepository = AppDataSource.getRepository(Marketers);

    await marketerRepository.delete(ids);

    res.send({ message: 'Comercializadoras eliminadas' });
  } catch (error) {
    res.status(500).send({ error: 'Error al eliminar las comercializadoras' });
  }
};
