import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Amazing Deals on ShopEase</h1>
          <p className="text-xl mb-8">Find the best products at unbeatable prices. Shop now and save big!</p>
          <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;