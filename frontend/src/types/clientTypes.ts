export interface Client {
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