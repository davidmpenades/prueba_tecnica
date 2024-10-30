import { Table } from 'antd';
import { tableProps } from '../../types/tableTypes';

const DataTable = <T extends object>({
  data,
  columns,
  rowKey = 'id',
}: tableProps<T>) => {
  return <Table columns={columns} dataSource={data} rowKey={rowKey} />;
};

export default DataTable;
