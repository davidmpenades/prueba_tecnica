import { Alert, Button, Skeleton } from 'antd';
import React, { useState } from 'react';
import ModalForm from '../components/modal/createModalForm';
import { marketerColumns } from '../components/tables/config/columnsConfig';
import DataTable from '../components/tables/dataTable';
import { useCreateMarketer, useMarketers } from '../hooks/useMarketer';
import { Marketer } from '../types/marketerTypes';
import { entityName } from '../types/modalType';
import { PlusOutlined } from '@ant-design/icons';

const MarketerPage: React.FC = () => {
  const { data: marketers, isLoading, error } = useMarketers();
  const createMarketer = useCreateMarketer();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handleCreateMarketer = (values: Partial<Marketer>) => {
    createMarketer.mutate(values);
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
          description='Error al cargar las comercializadoras'
          type='error'
          showIcon
        />
      </div>
    );
  }

  return (
    <div className='table'>
      <div className='title-header'>
        <h1 className='title title-container'>Comercializadoras</h1>
        <Button type='primary' onClick={handleOpenModal} icon={<PlusOutlined />}>
          Nueva Operación
        </Button>
      </div>
      {marketers && marketers.length > 0 ? (
        <DataTable<Marketer> data={marketers} columns={marketerColumns} />
      ) : (
        <Alert
          message='Información'
          description='No se han encontrado comercializadoras.'
          type='info'
          showIcon
          style={{ textAlign: 'center', margin: '20px 0' }}
        />
      )}

      <ModalForm
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleCreateMarketer}
        entityType={entityName.marketer}
      />
    </div>
  );
};

export default MarketerPage;
