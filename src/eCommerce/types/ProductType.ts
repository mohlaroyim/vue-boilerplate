export type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[]; // Array of image URLs
  price: number;
  rating: number;
  stock: number;
  thumbnail: string; // URL for the thumbnail
  title: string;
}
