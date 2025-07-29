import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Home from './pages/Home'; // Assuming your original App content is moved to Home.tsx
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import footerImg from './assets/images/FooterBg.png';
import Principals from './pages/Principals';

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
                                <Link key={link.name} to={link.path} className="text-white hover:text-orange-300 px-3 py-2 rounded-md md:text-baselg:text-lg font-medium transition-colors">
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
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-gray-200 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => {
    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Clients", path: "/clients" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
    ];
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
                               <li key={link.name} className="list-none"><Link to={link.path} className="hover:text-orange-400 transition-colors px-4">{link.name}</Link></li>
                           ))}
                        </ul>
                        <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Aber Ahmed Equipment Est. Abu Dhabi, UAE</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;