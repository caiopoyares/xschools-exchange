export interface School {
  id: number;
  name: string;
  description: string;
  country: string;
  city: string;
  languages: string[];
  imageUrl: string;
  rating: number;
  priceRating: number;
  price: number;
  favorite: boolean;
}
