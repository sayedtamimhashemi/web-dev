
export interface Product {
  id: string;
  name: string;
  category: 'Necklaces' | 'Rings' | 'Earrings' | 'Bracelets';
  price: number;
  description: string;
  image: string;
}
