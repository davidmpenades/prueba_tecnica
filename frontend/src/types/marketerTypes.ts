export interface Marketer {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    website?: string;
    logo_url?: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
  }