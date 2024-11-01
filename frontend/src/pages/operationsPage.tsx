import { PlusOutlined } from '@ant-design/icons';
import { Alert, Button, Skeleton, Table } from 'antd';
import React, { useState } from 'react';
import ModalForm from '../components/modal/createModalForm';
import { operationColumns } from '../components/tables/config/columnsConfig';
import {
  useCreateOperation,
  useDeleteOperations,
  useOperations,
} from '../hooks/useOperations';
import { entityName } from '../types/modalType';
import { Operation } from '../types/operationTypes';
import { toast } from 'sonner';

const OperationsPage: React.FC = () => {
  const { data: operations, isLoading, error } = useOperations();
  const createOperation = useCreateOperation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const deleteOperation = useDeleteOperations();

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handleCreateOperation = (values: Partial<Operation>) => {
    createOperation.mutate(values);
    handleCloseModal();
  };

  const handleDeleteSelected = () => {
    if(selectedRowKeys.length === 0) {
      toast.info('Selecciona al menos una operación');
    }
    deleteOperation.mutate(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys as number[]);
    },
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
        <div>
          <Button
            type='primary'
            onClick={handleOpenModal}
            icon={<PlusOutlined />}
            style={{ marginRight: '10px' }}
          >
            Nueva Operación
          </Button>
          <Button
            type='primary'
            danger
            onClick={handleDeleteSelected}
            style={{ marginLeft: '10px' }}
          >
            Eliminar Seleccionados
          </Button>
        </div>
      </div>
      {operations && operations.length > 0 ? (
        <Table
          rowSelection={rowSelection}
          columns={operationColumns}
          dataSource={operations}
          rowKey='id'
        />
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
