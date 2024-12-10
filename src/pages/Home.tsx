import React from 'react';
import { CategoryMenu } from '../components/home/CategoryMenu';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Category Menu */}
          <div className="hidden md:block col-span-2">
            <CategoryMenu />
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-10 space-y-4">
            <Hero />
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Flash Sale</h2>
              <FeaturedProducts />
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Just For You</h2>
              <FeaturedProducts />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};