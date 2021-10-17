export interface School {
  id: number;
  name: string;
  description: string;
  location: {
    country: string;
    city: string;
  };
  languages: string[];
  imageUrl: string;
  rating: number;
  favorite: boolean;
}
