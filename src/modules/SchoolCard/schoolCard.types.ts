export interface SchoolDetails {
  id: number;
  name: string;
  description: string;
  phone: {
    code: string;
    number: string;
  };
  location: {
    country: string;
    city: string;
  };
  email: string;
  courses: Course[];
  languages: string[];
  images: string[];
  features: string[];
  rating: Record<string, number>;
}

interface Course {
  id: number;
  name: string;
  description: string;
  language: string;
  schedule: {
    start: string;
    end: string;
  };
  price: number;
  paymentOptions: any;
}
