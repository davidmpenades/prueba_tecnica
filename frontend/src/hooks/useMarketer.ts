import { useQuery } from '@tanstack/react-query';
import { Marketer } from '../types/marketerTypes';

const fetchMarketers = async (): Promise<Marketer[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/marketers`);

  if (!response.ok) {
    throw new Error('Error al obtener las comercializadoras');
  }
  return response.json();
};

export const useMarketers = () => {
  return useQuery<Marketer[]>({
    queryKey: ['marketers'],
    queryFn: fetchMarketers,
  });
};