import { Alert, Button, Skeleton } from 'antd';
import React, { useState } from 'react';
import ModalForm from '../components/modal/createModalForm';
import { clientColumns } from '../components/tables/config/columnsConfig';
import DataTable from '../components/tables/dataTable';
import { useClients, useCreateClient } from '../hooks/useClients';
import { Client } from '../types/clientTypes';
import { entityName } from '../types/modalType';

const ClientsPage: React.FC = () => {
  const { data: clients, isLoading, error } = useClients();
  const createClient = useCreateClient();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handleCreateClient = (values: Partial<Client>) => {
    createClient.mutate(values);
    handleCloseModal();
  };

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
      <div className='title-header'>
        <h1 className='title title-container'>Clientes</h1>
        <Button type='primary' onClick={handleOpenModal}>
          Nueva Operación
        </Button>
      </div>
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

      <ModalForm
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleCreateClient}
        entityType={entityName.client}
      />
    </div>
  );
};

export default ClientsPage;
