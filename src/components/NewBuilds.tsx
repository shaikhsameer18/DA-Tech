import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import jewelbuild1a from "../assets/1a.jpg";
import jewelbuild1b from "../assets/1b.jpg";

import build2a from "../assets/2a.jpg"
import build2b from "../assets/2b.jpg"

import build3a from "../assets/3a.jpg"
import build3b from "../assets/3b.jpg"

const builds = [
  {
    title: 'Jewellery Designing System Build',
    images: [
      jewelbuild1b,
      jewelbuild1a
    ],
    description: 'Intel® Core™ i7, Gigabyte® Motherboard, G.SKILL® DDR4 Memory, WD_BLACK™ SSD, NVIDIA® GeForce RTX™ 3050, GAMMAX L240 A-RGB Cooler, Cooler Master® PSU.',
  },

  {
    title: 'Game Developer Rig',
    images: [
      build2a,
      build2b
    ],
    description: 'Intel® Core™ i9-13900K, Asus® PRIME Z790-P, 64GB Adata® XPG® Lancer RGB DDR5 Memory, 2TB Samsung® 980 PRO PCIe® 4.0 NVMe™ SSD, Zotac® Gaming NVidia GeForce RTX™ 4090 Trinity, Cooler Master® MasterLiquid™ ML360L V2 ARGB, Cooler Master® MWE™ Gold 1250 V2 - 1250 Watts SMPS, Cooler Master® Masterbox™ TD500 Mesh.',
  },
  {
    title: 'Render System',
    images: [
      build3a,
      build3b
    ],
    description: 'Intel® Core™ i9-13900KS, Asus® Tuf Gaming Z790-Plus WiFi DDR5, 64GB Corsair® Vengeance® DDR5 RAM, 1TB Samsung® 990 PRO PCIe® 4.0 NVMe™ SSD, 1TB Western Digital SN850X PCIe® 4.0 NVMe™ SSD, Zotac® Gaming NVidia GeForce RTX™ 4090 Trinity, Corsair® H150 RGB Performance Liquid Cooler, Cooler Master® MWE™ Gold 1250 V2 - 1250 Watts SMPS, DeepCool® CH560 Digital Mid Tower Cabinet.',
  },

];

const NewBuilds = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="builds" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Our Latest <span className="text-red-600">Builds</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm text-gray-600 dark:text-gray-400">
            Discover our recent projects featuring advanced technology and innovative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {builds.map((build, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="relative w-full h-64">
                {/* First Image */}
                <img
                  src={build.images[0]}
                  alt={`${build.title} Image 1`}
                  className="absolute top-0 left-0 object-contain w-full h-full transition-opacity duration-300"
                />

                {/* Second Image */}
                <img
                  src={build.images[1]}
                  alt={`${build.title} Image 2`}
                  className="absolute top-0 left-0 object-contain w-full h-full transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="mb-1 text-lg font-bold text-white">{build.title}</h3>
                  <p className="text-sm text-gray-200">{build.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewBuilds;