import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400",
    discount: 40
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400",
    discount: 31
  },
  {
    id: 3,
    title: "Phone Case",
    price: 9.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400",
    discount: 50
  },
  {
    id: 4,
    title: "Laptop Backpack",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400",
    discount: 33
  }
];

export const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-sm font-medium text-gray-800 mb-2">{product.title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-[#f85606] font-semibold">Rs. {product.price}</span>
            <span className="text-xs text-gray-500 line-through">Rs. {product.originalPrice}</span>
          </div>
          <div className="mt-1 inline-block bg-[#ffeee6] text-[#f85606] text-xs px-2 py-1 rounded">
            -{product.discount}%
          </div>
        </div>
      ))}
    </div>
  );
};