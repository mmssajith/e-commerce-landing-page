"use client";

import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          ShopEase
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
            <li><Link href="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;