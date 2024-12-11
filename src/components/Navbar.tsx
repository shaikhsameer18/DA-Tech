import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import nologoSrc from '../assets/nobglogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Builds', href: '#builds' },
    { name: 'Videos', href: '#videos' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed z-50 w-full transition-colors duration-300 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0 cursor-pointer select-none">
            <div className={`p-1 rounded ${isDarkMode ? 'bg-gray-100 bg-opacity-80' : 'bg-transparent'}`}>
              <img
                src={nologoSrc}
                alt="D.A. Tech Logo"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
            {/* Company Name (hidden on mobile, visible on larger screens) */}
            <span className="hidden ml-2 text-2xl font-semibold tracking-wide text-black md:inline-block dark:text-white">
              D.A. TECHNOLOGIES
            </span>
          </a>

          {/* Navigation Links (hidden on mobile) */}
          <div className="items-center hidden space-x-8 md:flex">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 md:hidden dark:text-gray-300 hover:text-red-500"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black">
              {/* Company Name (visible in mobile menu) */}
              <div className="px-3 py-2 text-xl font-semibold text-black dark:text-white">
                D.A. TECHNOLOGIES
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

