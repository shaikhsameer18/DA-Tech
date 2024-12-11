import { Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/d.a.technologies/' },
  ];

  return (
    <footer className="py-12 bg-gray-100 border-t border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">D.A. Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              When It Comes To Technology!
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#builds"
                  className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-600"
                >
                  Builds
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Business Hours</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} D.A. Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
