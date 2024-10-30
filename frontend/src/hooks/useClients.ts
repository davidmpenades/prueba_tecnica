import { useQuery } from '@tanstack/react-query';
import { Client } from '../types/clientTypes';

const fetchClients = async (): Promise<Client[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/clients`);

  if (!response.ok) {
    throw new Error('Error al obtener los clientes');
  }
  return response.json();
};

export const useClients = () => {
  return useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });
};