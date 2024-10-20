import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopEase</h3>
            <p className="text-sm">Your one-stop shop for all your needs.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="text-sm hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-primary">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:text-primary">Returns</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2023 ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;