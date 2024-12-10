import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  "Electronic Devices",
  "Electronic Accessories",
  "TV & Home Appliances",
  "Health & Beauty",
  "Babies & Toys",
  "Groceries & Pets",
  "Home & Lifestyle",
  "Women's Fashion",
  "Men's Fashion",
  "Watches & Accessories",
  "Sports & Outdoor",
  "Automotive & Motorbike"
];

export const CategoryMenu = () => {
  return (
    <div className="bg-white shadow-md">
      <ul className="text-sm">
        {categories.map((category, index) => (
          <li key={index} className="hover:bg-gray-50">
            <a href={`/category/${category.toLowerCase().replace(/ /g, '-')}`} 
               className="flex items-center justify-between px-4 py-2 text-gray-700">
              <span>{category}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};