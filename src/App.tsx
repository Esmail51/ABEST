import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import AboutImg from './assets/images/image 4.png';
import automation_control from './assets/images/automation.png';
import pca from './assets/images/pas.png';
import Analyzer from './assets/images/analyzer_shelter.png';
import BarellelImg from './assets/images/barrel_14113215 1.png';
import gasImg from './assets/images/gas_chramtography.png';
import cmeImg from './assets/images/CMES.png'
import NavigationImg from './assets/images/Navigation_aid.png';
import InstallationImg from './assets/images/installationCommosion.png';
import CalibrationImg from './assets/images/calibration_test.png';
import RepairImg from './assets/images/servicing.png';
import SpecialistImg from './assets/images/speacalistManpower.png';
import fireFighterImg from './assets/images/firefighters.png';
import oilRefinery from './assets/images/oilrefinaryImg.jpg';
import safteyImg from './assets/images/saftey.png';
import footerImg from './assets/images/FooterBg.png';

// Animation Variants
const fadeInStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Reusable component for section titles with an orange underline
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
    <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
  </motion.div>
);

// Helper component for Expertise Items to match the design
const ExpertiseItem: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <div className="flex flex-col items-center text-center p-2">
    <div className="w-16 h-16 bg-gray-100 hover:bg-orange-100 transition-all duration-300 rounded-full mb-4 shadow-md hover:shadow-lg flex items-center justify-center">
      <img src={image} alt={title} className="h-10 w-auto" />
    </div>
    <h3 className="font-semibold text-gray-600 text-sm md:text-base">{title}</h3>
  </div>
);

// Header Component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Products", "Clients", "Services", "Contact Us"];

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white">ABEST</h1>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-white hover:text-orange-300 px-3 py-2 rounded-md md:text-baselg:text-lg font-medium transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none"
              aria-label="Open main menu"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-200 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const Hero: React.FC = () => (
  <section className="relative h-[750px] flex items-center text-white">
    <div className="absolute inset-0 bg-cover bg-center hero-bg" style={{ '--hero-bg-image': `url(${oilRefinery})` } as React.CSSProperties}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-start" variants={fadeInStagger} initial="hidden" animate="visible">
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          Precision, Trust, and
          <br />
          Innovation for a 
          <br />
          Dynamic Industry
        </motion.h2>
        <motion.div variants={fadeInUp} className="mt-8 flex justify-start gap-4">
          <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300">
            Contact
          </button>
          <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300">
            Discover More
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Services Component
const ServiceCard: React.FC<{ image: string; title: string }> = ({ image, title }) => (
    <div className="flex flex-col items-center group">
        <div className="w-full p-1 bg-white h-56 shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-gray-700">{title}</h3>
    </div>
);

const Services: React.FC = () => {
    const servicesData = [
        { image: fireFighterImg, title: "FIRE FIGHTING" },
        { image: oilRefinery, title: "GAS DETECTION" },
        { image: safteyImg, title: "SAFETY" },
    ];

    return (
    <section className="relative z-20 -mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="bg-transparent p-16 grid grid-cols-1 md:grid-cols-3 gap-12" variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {servicesData.map((service, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        <ServiceCard image={service.image} title={service.title} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
    );
};

// Welcome Component
const Welcome: React.FC = () => (
  <section className="pt-10 pb-20 bg-white overflow-x-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInLeft}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to ABEST</h2>
          <div className="w-24 h-1 bg-orange-500 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Aber Ahmed Equipment Est., ABEST is established in the year 1995, in Abu Dhabi, UAE. Abest is a technical trading company managed by a team of Qualified Professionals having two decades of experience in Oil/Gas, Marine and Industrial Sectors of the United Arab Emirates.
          </p>
        </motion.div>
        <motion.div className="flex justify-center md:justify-end" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInRight}>
          <img 
            src={AboutImg}
            alt="Engineer" 
            className="rounded-lg w-full max-w-md"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Expertise Component
const Expertise: React.FC = () => {
  const expertiseData = [
    { image: automation_control, title: "Automation Control" },
    { image: pca, title: "Process Analyzer System" },
    { image: Analyzer, title: "Analyzer Shelters" },
    { image: BarellelImg, title: "Gas/Oil/Marine Materials" },
    { image: gasImg, title: "Gas Chromatography" },
    { image: cmeImg, title: "C.M.E.S" },
    { image: NavigationImg, title: "Navigation Aid Systems" },
    { image: InstallationImg, title: "Installation/Commissioning" },
    { image: CalibrationImg, title: "Calibration/Testing" },
    { image: RepairImg, title: "Servicing/Repairing" },
    { image: SpecialistImg, title: "Specialist Manpower" },
  ];

  const expertiseRow1 = expertiseData.slice(0, 4);
  const expertiseRow2 = expertiseData.slice(4, 8);
  const expertiseRow3 = expertiseData.slice(8, 11);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Our Expertise</SectionTitle>
        {/* Layout for small to medium screens */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12 lg:hidden" variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {expertiseData.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}><ExpertiseItem image={item.image} title={item.title} /></motion.div>
          ))}
        </motion.div>

        {/* Layout for large screens and up (4-4-3, centered) */}
        <div className="hidden lg:flex flex-col items-center gap-y-12">
          {/* Row 1 */}
          <motion.div className="grid grid-cols-4 gap-x-6" variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {expertiseRow1.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}><ExpertiseItem image={item.image} title={item.title} /></motion.div>
            ))}
          </motion.div>
          {/* Row 2 */}
          <motion.div className="grid grid-cols-4 gap-x-6" variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {expertiseRow2.map((item, index) => (
              <motion.div key={index + 4} variants={fadeInUp}><ExpertiseItem image={item.image} title={item.title} /></motion.div>
            ))}
          </motion.div>
          {/* Row 3 */}
          <motion.div className="grid grid-cols-3 gap-x-6" variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {expertiseRow3.map((item, index) => (
              <motion.div key={index + 8} variants={fadeInUp}><ExpertiseItem image={item.image} title={item.title} /></motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Newsletter Component
const Newsletter: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle>Get Latest Offers</SectionTitle>
      <motion.form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeInUp}>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <button 
          type="submit" 
          className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
        >
          SUBSCRIBE
        </button>
      </motion.form>
    </div>
  </section>
);

// Footer Component
const Footer: React.FC = () => {
    const footerLinks = ["Home", "Products", "Clients", "Services", "Contact Us"];
    return (
        <footer className="relative text-gray-300">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${footerImg})`}} >
                <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            </div>
            <div className="relative max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">ABEST</h3>
                        <p className="text-sm max-w-md">
                            ABER AHMED EQUIPMENT EST. (ABEST) is in business for over a decade, during this period we have gained the trust and goodwill of our various Clients, our Clients base continues to grow not just in U.A.E but in neighbouring Countries as well.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">GET IN TOUCH</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start"><Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-400" /> <span>+971 2 6766366</span></li>
                            <li className="flex items-start"><Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-400" /> <span>SALES@ABEST.AE</span></li>
                            <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-400" /> <span>FLAT NO. 708, 7TH FLOOR, AL GHAITH TOWER, P.O. BOX: 43596, HAMDAN BIN MOHAMMED STREET, ABU DHABI, U.A.E.</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">NEWSLETTER</h3>
                        <p className="text-sm mb-3">Sign up for our newsletter</p>
                        <form className="flex">
                            <input type="email" placeholder="Email Address" className="w-full p-2 rounded-l-md text-gray-800 bg-gray-200 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            <button type="submit" className="bg-orange-500 text-white font-bold p-2 px-4 rounded-r-md hover:bg-orange-600 transition">GO</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-col md:gap-2 justify-between items-center text-sm">
                        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-0 md:divide-x md:divide-gray-600 mb-4 md:mb-0">
                             {footerLinks.map(link => (
                               <li key={link} className="list-none"><a href="#" className="hover:text-orange-400 transition-colors px-4">{link}</a></li>
                           ))}
                        </ul>
                        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Aber Ahmed Equipment Est. Abu Dhabi, UAE</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Welcome />
        <Expertise />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
