import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'John Doe', comment: 'Great products and fast shipping! Will definitely shop here again.', rating: 5 },
  { id: 2, name: 'Jane Smith', comment: 'The customer service is excellent. They helped me find the perfect item.', rating: 4 },
  { id: 3, name: 'Mike Johnson', comment: 'High-quality products at reasonable prices. Highly recommended!', rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.comment}&quot;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;