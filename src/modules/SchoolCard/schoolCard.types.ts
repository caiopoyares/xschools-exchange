export interface SchoolDetails {
  id: number;
  name: string;
  description: string;
  phone: {
    code: string;
    number: string;
  };
  email: string;
  country: string;
  city: string;
  schedule: {
    start: {
      year: number;
      month: number;
    };
    end: {
      year: number;
      month: number;
    };
  };
  languages: string[];
  images: string[];
  features: string[];
  ratings: Record<string, number>;
  totalPrice: number;
  monthlyPrice: number;
  acceptInstallments: boolean;
  maxInstallments: number;
  favorite: boolean;
}
