import { ColumnsType } from 'antd/es/table';

export interface tableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  rowKey?: string;
}
