import { Alert, Skeleton } from 'antd';
import React from 'react';
import DataTable from '../components/tables/dataTable';
import { marketerColumns } from '../config/ColumnsConfig';
import { useMarketers } from '../hooks/useMarketer';
import { Marketer } from '../types/marketerTypes';

const MarketerPage: React.FC = () => {
  const { data: marketers, isLoading, error } = useMarketers();

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
      <h1 className='title title-container'>Comercializadoras</h1>
      {marketers && (
        <DataTable<Marketer> data={marketers} columns={marketerColumns} />
      )}
    </div>
  );
};

export default MarketerPage;