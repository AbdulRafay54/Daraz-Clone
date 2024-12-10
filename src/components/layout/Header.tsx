import React from 'react';
import { Search, ShoppingCart, User, Heart, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-[#f85606] text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between py-1 text-xs border-b border-orange-400">
          <nav className="space-x-4">
            <Link to="/seller-center">Become a Seller</Link>
            <Link to="/payment">Daraz Affiliate Program</Link>
            <Link to="/help">Help & Support</Link>
          </nav>
          <div className="flex space-x-4">
            <Link to="/app">Save More on App</Link>
            <Link to="/track">Track My Order</Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4 flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">Daraz</Link>
          
          <div className="flex-1 max-w-3xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in Daraz"
                className="w-full py-2 px-4 rounded-sm text-gray-800 focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#f85606] text-white rounded-r-sm">
                <Search size={20} />
              </button>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="flex items-center gap-1">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link to="/account" className="flex items-center gap-1">
              <User size={20} />
              <span>Login</span>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-1">
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>
            <Link to="/notifications" className="flex items-center gap-1">
              <Bell size={20} />
              <span>Notifications</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};