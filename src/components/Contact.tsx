import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1 text-red-600" />
              <div>
                <h3 className="mb-1 font-semibold text-black dark:text-white">Email Us</h3>
                <a href="mailto:d.a.technologies@outlook.com" className="text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  d.a.technologies@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 text-red-600" />
              <div>
                <h3 className="mb-1 font-semibold text-black dark:text-white">Call Us</h3>
                <p className="text-gray-700 dark:text-gray-400">Rahul Mehta (+91) 98679 46443</p>
                <p className="text-gray-700 dark:text-gray-400">Sagir Ahmed (+91) 96643 68377</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1 text-red-600" />
              <div>
                <h3 className="mb-1 font-semibold text-black dark:text-white">Business Hours</h3>
                <p className="text-gray-700 dark:text-gray-400">Monday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Tuesday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Wednesday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700 dark:text-gray-400">Sunday: Closed</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-12 h-12 -mt-2 text-red-600" />
              <div>
                <h3 className="mb-1 font-semibold text-black dark:text-white">Location</h3>
                <p className="text-gray-700 dark:text-gray-400">Shop No B/5, Ground Floor, Purushottam Building, Tribhuvan Road, Grant Road, Lamington Road, Mumbai - 400004 (Opposite Mehta Mansion Building)</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/xwpkjwpa"
            method="POST"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-black bg-white rounded-lg dark:text-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-black bg-white rounded-lg dark:text-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 text-black bg-white rounded-lg dark:text-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;