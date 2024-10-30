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

export interface ClientRequest {
  name: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  description?: string;
}

export interface ClientResponse {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}
