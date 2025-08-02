import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Handshake } from 'lucide-react';
import oilRefinery from '../assets/images/principalBanner.webp';

// --- Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// --- Data for Principals ---
const principalsData = [
    {
        name: "Fire & Gas Detection Technologies",
        description: "Manufacturer of Flame detectors for the Oil & Gas industry, Petrochemical and other high-risk industries.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/07/FGD.jpg"
    },
    {
        name: "GEMCO International B.V",
        description: "Specialized in design, engineering & construction of industrial workshops.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/gemco.png"
    },
    {
        name: "Mettler Toledo AG",
        description: "Process Analytics, Measurement Solutions for Industrial Applications.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/mettler-toledo.jpg"
    },
    {
        name: "Rose Systemtechnik",
        description: "Junction Boxes & Custom made Industrial Enclosures.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/rose.gif"
    },
    {
        name: "Servomex Group Limited",
        description: "Process/Oxygen, Hydrocarbon, CO, CO2, NOX Analysers for oil & gas industries.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/servomex.png"
    },
    {
        name: "Shaw Moisture Meters",
        description: "Portable & online Moisture Analysers.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/shaw.gif"
    },
    {
        name: "Monicon Technology",
        description: "Gas Detection Systems.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/monicon.png"
    },
    {
        name: "Orga B.V",
        description: "Aids to navigation and obstruction lighting for safety and compliance.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/orga.png"
    },
    {
        name: "Klaxon Signals Ltd.",
        description: "Exd Audio & Visual Alarms.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/klaxon.gif"
    },
    {
        name: "JM Canty Inc",
        description: "Oil in water analyzers, Sight Glass, and High Temperature Vessel Cameras.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/jmcanty.jpg"
    },
    {
        name: "Hobré Instruments BV",
        description: "On-line analyzers and complete turnkey analyzer systems.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/hobre.png"
    },
    {
        name: "Scarecrow Group",
        description: "Bird Dispersal systems for Safe & Hazardous Areas.",
        logoUrl: "https://abest.ae/wp-content/uploads/2025/02/scarecrow.png"
    }
];


// --- NEW, MORE RELIABLE Principal Card Component ---
const PrincipalCard: React.FC<{ logoUrl: string; name: string; description: string; }> = ({ logoUrl, name, description }) => (
    <motion.div 
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-2xl"
        variants={fadeInUp}
    >
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-24 h-16 flex items-center justify-center p-2 mr-5">
                <img src={logoUrl} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
            </div>
             <hr className="border-r border-gray-200 h-16"/>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
);


// --- Main Principals Page Component ---
const Principals: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* --- Hero Section --- */}
            <div className="relative flex items-center justify-center h-[400px] text-white text-center px-4" style={{
                backgroundImage: `url(${oilRefinery})`,
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
                    {/* <Handshake size={60} className="mx-auto mb-4 text-orange-400"/> */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Principals</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                        Collaborating with world-class manufacturers to deliver cutting-edge solutions.
                    </p>
                </motion.div>
            </div>

            {/* --- Principals Grid Section --- */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        // This viewport setting ensures the animation triggers as soon as the container is even a little bit visible
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {principalsData.map(principal => (
                            <PrincipalCard 
                                key={principal.name}
                                logoUrl={principal.logoUrl}
                                name={principal.name}
                                description={principal.description}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Principals;