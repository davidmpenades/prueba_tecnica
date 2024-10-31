export interface Operation {
  id: number;
  type: OperationType;
  amount: number;
  price: number;
  marketer: {
    id: number;
    name: string;
  };
  client: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

export enum OperationType {
  COMPRA = 'compra',
  VENTA = 'venta',
}