import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Operation } from '../types/operationTypes';

const apiUrl = import.meta.env.VITE_API_URL;

const fetchOperations = async (): Promise<Operation[]> => {
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

export const useCreateOperation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newOperation: Partial<Operation>) => {
      const response = await fetch(`${apiUrl}/operations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOperation), 
      });

      if (!response.ok) {
        throw new Error('Error al crear la operación');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['operations'] });
    },
  });
};
