import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import bgImg from "../assets/ebg.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-16 bg-gray-800 md:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 py-8 text-center sm:px-6 md:py-12 lg:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        >
          When It Comes To <span className="text-red-600">Technology!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto mt-4 text-sm text-gray-300 sm:text-base lg:text-lg"
        >
          Build | Repair | Tech
        </motion.p>

        {/* Contact & Location Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="tel:+919867946443"
              className="inline-flex items-center justify-between px-4 py-2 text-sm text-white transition-transform duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:scale-105"
            >
              <Phone className="mr-2" size={18} />
              Rahul Mehta (+91) 98679 46443
            </a>
            <a
              href="tel:+919664368377"
              className="inline-flex items-center justify-between px-4 py-2 text-sm text-white transition-transform duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:scale-105"
            >
              <Phone className="mr-2" size={18} />
              Sagir Ahmed (+91) 96643 68377
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/XwAVVNF81hf7oAyN9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm text-white transition-transform duration-300 border-2 border-red-600 rounded-lg hover:bg-red-600/20 hover:scale-105"
          >
            <MapPin className="mr-2" size={18} />
            Locate Us
          </a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid max-w-xl grid-cols-2 gap-3 mx-auto mt-8 sm:grid-cols-4 sm:gap-4"
        >
          {['24/7 Support', 'Expert Team', 'Quality Service', 'Best Price'].map(
            (feature, index) => (
              <div
                key={index}
                className="p-3 text-sm text-white transition-transform duration-300 rounded-lg bg-white/10 backdrop-blur-md hover:scale-105"
              >
                <p className="font-medium">{feature}</p>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

