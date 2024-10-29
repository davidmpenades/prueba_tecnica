import { AppDataSource } from './db/config';

const start = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1);
  }
};

start();
