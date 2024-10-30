import { Alert, Skeleton } from 'antd';
import React from 'react';
import DataTable from '../components/tables/dataTable';
import { operationColumns } from '../components/tables/config/ColumnsConfig';
import { useOperations } from '../hooks/useOperations';
import { Operation } from '../types/operationTypes';

const OperationsPage: React.FC = () => {
  const { data: operations, isLoading, error } = useOperations();

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
      <h1 className='title title-container'>Operaciones</h1>
      {operations && (
        <DataTable<Operation> data={operations} columns={operationColumns} />
      )}
    </div>
  );
};

export default OperationsPage;
