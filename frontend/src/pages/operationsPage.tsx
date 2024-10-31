import { Alert, Button, Skeleton } from 'antd';
import React, { useState } from 'react';
import ModalForm from '../components/modal/createModalForm';
import { operationColumns } from '../components/tables/config/columnsConfig';
import DataTable from '../components/tables/dataTable';
import { useCreateOperation, useOperations } from '../hooks/useOperations';
import { Operation } from '../types/operationTypes';
import { entityName } from '../types/modalType';

const OperationsPage: React.FC = () => {
  const { data: operations, isLoading, error } = useOperations();
  const createOperation = useCreateOperation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handleCreateOperation = (values: Partial<Operation>) => {
    createOperation.mutate(values);
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
          description='Error al cargar las operaciones'
          type='error'

          showIcon
        />
      </div>
    );
  }

  return (
    <div className='table'>
      <div className='title-header'>
        <h1 className='title title-container'>Operaciones</h1>
        <Button type='primary' onClick={handleOpenModal}>
          Nueva Operación
        </Button>
      </div>
      {operations && operations.length > 0 ? (
        <DataTable<Operation> data={operations} columns={operationColumns} />
      ) : (
        <Alert
          message='Información'
          description='No se han encontrado operaciones.'
          type='info'
          showIcon
          style={{ textAlign: 'center', margin: '20px 0' }}
        />
      )}

      <ModalForm
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleCreateOperation}
        entityType={entityName.operation}
      />
    </div>
  );
};

export default OperationsPage;
