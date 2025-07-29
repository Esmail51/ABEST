import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Package, Ship, Wrench, CheckCircle, Clock, ShieldCheck, HardHat } from 'lucide-react';
import servicingImage from '../assets/images/saftey.png'; 

// --- Animation Variants with correct typing ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.7, 
            ease: 'easeOut' // This is a valid Easing keyword
        } 
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
};


// --- Reusable Components ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
    </motion.div>
);

const ServiceListItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) =>(
    <motion.li 
        className="flex items-center text-lg text-gray-700"
        variants={fadeInUp}
    >
        <span className="text-orange-500 mr-4">{icon}</span>
        {children}
    </motion.li>
);


// --- Main Services Page Component ---
const Services: React.FC = () => {

    const coreServices = [
        { icon: <Package size={22}/>, text: 'Supplier of Oil/Gas Materials' },
        { icon: <Ship size={22}/>, text: 'Supplier of Marine Materials' },
        { icon: <Wrench size={22}/>, text: 'Installation and Commissioning, start-up and training' },
        { icon: <CheckCircle size={22}/>, text: 'Servicing and Maintenance' },
        { icon: <HardHat size={22}/>, text: 'Supply of Specialist Manpower' },
    ];

    const afterSalesServices = [
        "Online Gas Analyser and Gas Chromatograph",
        "Portable Gas Detectors",
        "Fixed Gas Monitoring Systems",
        "Marine Fire Detection & Alarm Systems",
        "Oxygen & Moisture Analysers",
        "Metal Analysers & Dew Point Meters",
        "Self Contained Breathing Apparatus Sets",
    ];

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <div className="relative flex items-center justify-center h-[450px] text-white text-center px-4" style={{
                backgroundImage: `url(${servicingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Services</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                        Expert support for analyzers and systems delivered by our qualified and experienced engineers.
                    </p>
                </motion.div>
            </div>

            {/* --- Core Services Section --- */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive Support</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                With a group of well-trained engineers, we offer different kinds of support varying from maintenance repairs, preventive maintenance contracts, start-up, commissioning, site surveys, and customer trainings for on-shore or off-shore analyzer applications.
                            </p>
                            <ul className="space-y-4">
                               {coreServices.map(service => <ServiceListItem key={service.text} icon={service.icon}>{service.text}</ServiceListItem>)}
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={servicingImage} alt="Engineering Team" className="rounded-lg shadow-2xl max-w-md w-full"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- After-Sales Service Section --- */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>After-Sales Service Facilities</SectionTitle>
                    <motion.div 
                        className="text-center max-w-3xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                    >
                         <p className="text-lg text-gray-600 mb-10">
                            We have manufacturer-trained and certified engineers to carry out servicing, calibration, and certification for a wide range of equipment. To ensure the best possible after-sales service and minimize downtime, we stock a strategic level of spare parts and consumables.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {afterSalesServices.map(item => (
                            <motion.div 
                                key={item}
                                className="bg-white p-5 rounded-lg shadow-md flex items-center"
                                variants={fadeInUp}
                            >
                                <CheckCircle className="text-green-500 mr-4 flex-shrink-0"/>
                                <span className="text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* --- 24/7 Support Section --- */}
            <section className="bg-orange-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-3xl font-bold mb-2">Round-the-Clock Emergency Support</h3>
                            <p className="text-orange-100 max-w-2xl">
                                We provide complete service back-up for all products we sell. Our service engineers are available 24 hours a day, 7 days a week to attend to any emergency calls from our clients.
                            </p>
                        </motion.div>
                        <motion.div
                            className="mt-8 md:mt-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Clock size={80} className="mx-auto md:mx-0"/>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;