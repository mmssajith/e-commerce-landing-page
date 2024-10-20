import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </div>
  );
}