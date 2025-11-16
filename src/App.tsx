import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowUp, Printer } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import footerImg from './assets/images/FooterBg.png';
import Principals from './pages/Principals';
import { motion, AnimatePresence } from 'framer-motion';

// --- NEW HELPER COMPONENT TO SCROLL TO TOP ON NAVIGATION ---
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render anything
}

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Principals", path: "/principals" },
        { name: "Services", path: "/services" },
        { name: "Clients", path: "/clients" },
        { name: "Contact Us", path: "/contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="absolute top-0 left-0 w-full z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-3xl font-bold text-white">
                                ABEST
                            </Link>
                        </div>
                        <nav className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <Link key={link.name} to={link.path} className="text-white hover:text-orange-300 px-3 py-2 rounded-md md:text-lg lg:text-xl font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none"
                                aria-label="Open main menu"
                            >
                                <Menu className="block h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm md:hidden"
                    >
                        <div className="flex justify-end p-6">
                             <button
                                onClick={closeMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none"
                                aria-label="Close main menu"
                            >
                                <X className="block h-8 w-8" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full -mt-20">
                           {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={closeMenu}
                                    className="text-gray-200 hover:text-orange-400 block py-4 text-3xl font-semibold transition-colors"
                                >
                                    {link.name}
                                </Link>
                           ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Footer: React.FC = () => {
    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Clients", path: "/clients" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
    ];

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative text-gray-300">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${footerImg})`}} >
                <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            </div>
            <div className="relative max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <h3 
                            className="text-2xl font-bold text-white mb-4 cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={handleScrollToTop}
                        >
                            ABEST
                        </h3>
                        <p className="text-sm max-w-md">
                            ABER AHMED EQUIPMENT L.L.C - S.P.C. (ABEST) is a reputed Trading and Technical Service Company located in Abu Dhabi, United Arab Emirates.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">GET IN TOUCH</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start"><Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>+971 2 6766366</span></li>
                                <li className="flex items-start"><Printer className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>+971 2 6760360</span></li>
                                <li className="flex items-start"><Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>sales@abest.ae</span></li>
                            <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-400" /> <span>Flat No. 708, 7th Floor, Al Ghaith Tower, P.O. Box: 43596, Hamdan Bin Mohammed Street, Sector: E8, Zone: Al Danah, Abu Dhabi, U.A.E.</span></li>
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
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-0 md:divide-x md:divide-gray-600 mb-4 md:mb-0">
                             {footerLinks.map(link => (
                               <li key={link.name} className="list-none"><Link to={link.path} className="hover:text-orange-400 transition-colors px-4">{link.name}</Link></li>
                           ))}
                        </ul>
                        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Aber Ahmed Equipment L.L.C - S.P.C. Abu Dhabi, UAE</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-orange-500 text-white rounded-full p-3 shadow-lg z-50 hover:bg-orange-600 transition-colors"
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* --- ADDED THE HELPER COMPONENT HERE --- */}
      <Header />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principals" element={<Principals />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;