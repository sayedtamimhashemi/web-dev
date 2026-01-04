
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-stone-100 to-amber-50/30 relative shadow-md group-hover:shadow-xl group-hover:shadow-amber-900/20 transition-all duration-500 rounded-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/0 via-transparent to-amber-900/0 group-hover:from-amber-900/10 group-hover:via-transparent group-hover:to-amber-900/10 transition-all duration-500" />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-sm font-serif font-medium bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent tracking-widest uppercase group-hover:from-amber-800 group-hover:via-amber-700 group-hover:to-amber-800 transition-all duration-300">{product.name}</h3>
        <p className="text-[10px] text-stone-500 mt-2 uppercase tracking-[0.2em] group-hover:text-amber-700 transition-colors duration-300">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
