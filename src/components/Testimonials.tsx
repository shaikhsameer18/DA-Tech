import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'M. S.',
    role: 'Local Guide & Regular Client',
    content: 'D. A. Technologies has proven that even a medium-sized shop can surpass the larger competitors in South Mumbai. Since 2018, I’ve been a loyal customer. They excel at building workstations, gaming systems, laptops, and even MacBooks. A top choice for architects, interior decorators, startups, and more.',
    rating: 5,
    image: 'M',
  },
  {
    name: 'Mohammed Javeed Shaikh',
    role: 'Tech Enthusiast & Repeat Customer',
    content: 'I was recommended D. A. Technologies and I’m glad I followed through. The team is diligent, providing transparent diagnoses and solutions. Their comprehensive approach helps you choose the best option for your needs. Always dependable for technical solutions.',
    rating: 5,
    image: 'J',
  },
  {
    name: 'Sudhir P.',
    role: 'Long-Time Client',
    content: 'For over 15 years, D. A. Technologies has been my go-to for reliable tech solutions. Their unwavering dedication to quality and top-notch service makes them one of the best in the business. Whether it’s repairs or new builds, they always deliver with expertise and care.',
    rating: 5,
    image: 'S',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Hear what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-xl font-bold text-white rounded-full bg-slate-700">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
