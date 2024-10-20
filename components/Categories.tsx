import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Smartphone, Headphones, Camera } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Smartphones', icon: Smartphone },
  { name: 'Audio', icon: Headphones },
  { name: 'Cameras', icon: Camera },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <category.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;