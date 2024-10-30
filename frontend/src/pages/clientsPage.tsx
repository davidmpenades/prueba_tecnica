import { Alert, Skeleton } from 'antd';
import React from 'react';
import DataTable from '../components/tables/dataTable';
import { clientColumns } from '../components/tables/config/ColumnsConfig';
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
      {clients && (
        <DataTable<Client> data={clients} columns={clientColumns} />
      )}
    </div>
  );
};

export default ClientsPage;