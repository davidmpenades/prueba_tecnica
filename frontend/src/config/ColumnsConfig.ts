import { ColumnsType } from 'antd/es/table';
import { Operation } from '../types/operationTypes';
import { Client } from '../types/clientTypes';

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const operationColumns: ColumnsType<Operation> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Cantidad',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Comercializadora',
    dataIndex: ['marketer', 'name'],
    key: 'marketer',
  },
  {
    title: 'Cliente',
    dataIndex: ['client', 'name'],
    key: 'client',
  },
  {
    title: 'Fecha de Creación',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (created_at: string) => formatDate(created_at),
  },
  {
    title: 'Fecha de Actualización',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (updated_at: string) => formatDate(updated_at),
  },
];

export const clientColumns: ColumnsType<Client> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Página Web',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Fecha de Creación',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (created_at: string) => formatDate(created_at),
  },
  {
    title: 'Fecha de Actualización',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (updated_at: string) => formatDate(updated_at),
  },
];

export const marketerColumns: ColumnsType<Client> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Página Web',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Fecha de Creación',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (created_at: string) => formatDate(created_at),
  },
  {
    title: 'Fecha de Actualización',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (updated_at: string) => formatDate(updated_at),
  },
];

