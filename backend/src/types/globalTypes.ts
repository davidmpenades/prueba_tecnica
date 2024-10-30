export interface OperationRequest {
  type: 'compra' | 'venta';
  amount: number;
  price: number;
  marketer: number;
  client: number;
}

export interface OperationResponse {
  id: number;
  type: 'compra' | 'venta';
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
  created_at: Date;
  updated_at: Date;
}
