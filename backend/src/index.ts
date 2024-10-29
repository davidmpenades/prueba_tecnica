import 'reflect-metadata';
import { createConnection } from 'typeorm';

const start = async () => {
  try {
    await createConnection();
    console.log('Conexión a la base de datos exitosa.');

    process.exit(0);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1);
  }
};

start();
