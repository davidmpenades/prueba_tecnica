import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Client } from '../types/clientTypes';
import { toast } from 'sonner';

const apiUrl = import.meta.env.VITE_API_URL;

const fetchClients = async (): Promise<Client[]> => {

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

export const useCreateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newClient: Partial<Client>) => {
      const response = await fetch(`${apiUrl}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });

      if (!response.ok) {
        throw new Error('Error al crear el cliente');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Cliente creado con éxito');
    },
  });
};