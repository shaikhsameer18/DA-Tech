import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HikVision from "../assets/hikvision.png";
import Honeywell from "../assets/honeywell.png";

const partners = [
  { name: 'Hikvision', logo: HikVision },
  { name: 'Honeywell', logo: Honeywell },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 transition-colors duration-300 bg-white dark:bg-black"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            About <span className="text-red-600">D.A. Technologies</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 prose prose-lg text-gray-900 dark:prose-invert dark:text-gray-300">
            <p>
              Established in 2009, <strong>D.A. Technologies</strong> specializes in providing high-quality laptops, computers, and hardware components.
              Along with sales, we offer expert software installation and comprehensive repair services to ensure our clients receive
              seamless support for all their technology needs.
            </p>

            <div className="grid grid-cols-1 gap-8 my-12 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">15+ Years of Experience</h3>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">600+ Happy Clients</h3>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">1000+ Projects Completed</h3>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">7+ Team Members</h3>
              </div>
            </div>

            <p>
              We specialize in laptop and computer sales, hardware upgrades, software installation, and reliable repair services.
              Our goal is to provide top-quality solutions and support to help you thrive in the digital world.
            </p>
          </div>
        </motion.div>

        {/* Trusted Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Trusted Partners
          </h3>
          <div
            className="flex flex-wrap justify-center gap-8"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-32 h-32 rounded-full shadow-lg"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
