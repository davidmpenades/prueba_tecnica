import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Marketer } from '../types/marketerTypes';

const apiUrl = import.meta.env.VITE_API_URL;

const fetchMarketers = async (): Promise<Marketer[]> => {
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

export const useCreateMarketer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newMarketer: Partial<Marketer>) => {
      const response = await fetch(`${apiUrl}/marketers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMarketer),
      });

      if (!response.ok) {
        throw new Error('Error al crear la comercializadora');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketers'] });
      toast.success('Comercializadora creada con éxito');
    },
  });
};
