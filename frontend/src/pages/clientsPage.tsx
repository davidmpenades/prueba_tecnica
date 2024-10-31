import { Alert, Skeleton } from 'antd';
import React from 'react';
import { clientColumns } from '../components/tables/config/columnsConfig';
import DataTable from '../components/tables/dataTable';
import { useClients } from '../hooks/useClients';
import { Client } from '../types/clientTypes';

const ClientsPage: React.FC = () => {
  const { data: clients, isLoading, error } = useClients();

  if (isLoading) {
    return <Skeleton active />;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Alert
          message='Error'
          description='Error al cargar los clientes'
          type='error'
          showIcon
        />
      </div>
    );
  }

  return (
    <div className='table'>
      <h1 className='title title-container'>Clientes</h1>
      {clients && clients.length > 0 ? (
        <DataTable<Client> data={clients} columns={clientColumns} />
      ) : (
        <Alert
          message='Información'
          description='No se han encontrado clientes.'
          type='info'
          showIcon
          style={{ textAlign: 'center', margin: '20px 0' }}
        />
      )}
    </div>
  );
};

export default ClientsPage;
