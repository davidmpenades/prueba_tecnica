import { Table } from 'antd';
import { tableProps } from '../../types/tableTypes';
import '../../styles/tableStyles.css';

const DataTable = <T extends object>({
  data,
  columns,
  rowKey = 'id',
}: tableProps<T>) => {
  return <Table columns={columns} dataSource={data} rowKey={rowKey} className="custom-table"/>;
};

export default DataTable;
