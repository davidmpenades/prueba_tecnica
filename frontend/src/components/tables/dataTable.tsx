import { Table } from 'antd';
import '../../styles/tableStyles.css';
import { tableProps } from '../../types/tableTypes';

const DataTable = <T extends object>({
  data,
  columns,
  rowKey = 'id',
}: tableProps<T>) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      pagination={{ pageSize: 8 }}
      className='custom-table'
    />
  );
};

export default DataTable;
