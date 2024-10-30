import { useQuery } from '@tanstack/react-query';
import { Operation } from '../types/operationTypes';

const fetchOperations = async (): Promise<Operation[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/operations`);

  if (!response.ok) {
    throw new Error('Error al obtener las operaciones');
  }
  return response.json();
};

export const useOperations = () => {
  return useQuery<Operation[]>({
    queryKey: ['operations'],
    queryFn: fetchOperations,
  });
};
