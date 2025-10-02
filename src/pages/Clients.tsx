import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Globe } from 'lucide-react';
import oilRefinery from '../assets/images/oilrefinaryImg.jpg';
import worldMapBg from '../assets/images/FooterBg.png'; 
import ADCOImg from '../assets/images/Client Logos/1 - ADNOC GROUP.jpg'
import NMDCImg from '../assets/images/Client Logos/2-NMDC Energy.png'
import TECHNIP_ENERGIES from '../assets/images/Client Logos/3-TECHNIP_ENERGIES.png'
import DUGAS from '../assets/images/Client Logos/4- dugas.png';
import ENOC from '../assets/images/Client Logos/5- ENOC.png';
import DUSUP from '../assets/images/Client Logos/6-Dusup.jpg';
import CPECC from '../assets/images/Client Logos/7-CPECC.jpg';
import Dolphin_Energy from '../assets/images/Client Logos/8- dolphin energy.png';
import JULPHAR from '../assets/images/Client Logos/9-Julphar.png';
import McDermott from '../assets/images/Client Logos/10- McDermott.jpg';
import krohne from '../assets/images/Client Logos/11- krohne.png';
import ADOC from '../assets/images/Client Logos/12-ADOC.jpg';
import Honeywell from '../assets/images/Client Logos/13-  Honeywell.webp';
import EmiratesGlobalAluminium from '../assets/images/Client Logos/14- Emirates Global Aluminium.png';
import GlobalPharma from '../assets/images/Client Logos/15- global pharma.png';
import WellPharma from '../assets/images/Client Logos/16 - Well Pharma.avif';
import Borouge from '../assets/images/Client Logos/Borouge_logo.gif';
import oilGas from '../assets/images/Client Logos/abu_dhabi_oil.gif';





// --- Client Data ---
const clients = [
    { name: "ADNOC - Onshore", logo: ADCOImg },
    { name: "ADNOC - Offshore", logo: ADCOImg },
    { name: "ADNOC - Gas processing", logo: ADCOImg },
    { name: "ADNOC - Refining", logo: ADCOImg },
    { name: "ADNOC - Drilling", logo: ADCOImg },
    { name: "NMDC Energy", logo: NMDCImg },
    { name: "TECHNIP ENERGIES", logo: TECHNIP_ENERGIES },
    { name: "DUGAS", logo: DUGAS },
    { name: "ENOC", logo: ENOC },
    { name: "DUSUP", logo: DUSUP },
    { name: "CPECC", logo: CPECC },
    { name: "DOLPHON ENERGY", logo: Dolphin_Energy },
    { name: "JULPHAR", logo: JULPHAR },
    { name: "McDermott", logo: McDermott },
    { name: "KROHNE", logo: krohne },
    { name: "Abu Dhabi Oil Co.Ltd", logo: ADOC },
    { name: "HONEYWELL", logo: Honeywell },
    { name: "EMIRATES GLOBAL ALUMINUM", logo: EmiratesGlobalAluminium },
    { name: "GLOBAL PHARMA", logo: GlobalPharma },
    { name: "WELL PHARMA", logo: WellPharma },
    { name: "BOROUGE", logo: Borouge },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};


// --- Main Clients Page Component ---
const Clients: React.FC = () => {
    return (
        <div className="bg-white">
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
                    {/* <Globe size={60} className="mx-auto mb-4 text-orange-400"/> */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Global Partnerships</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                       Powering industries worldwide through strong, collaborative relationships.
                    </p>
                </motion.div>
            </div>

            {/* --- Client Showcase Section --- */}
            <section className="relative py-24 px-4" style={{
                backgroundImage: `url(${worldMapBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                 <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                         <h2 className="text-3xl font-bold text-gray-800">Trusted Around the World</h2>
                         <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Our commitment to quality has earned the trust of leading companies and government bodies.</p>
                         <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                             <motion.div
                                key={client.name}
                                className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-200/50 text-center group"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.05 }}
                                variants={cardVariants}
                             >
                                <div className="h-24 flex justify-center items-center mb-4 transition-transform duration-300 group-hover:scale-105">
                                    {/* CORRECTED IMAGE STYLING HERE */}
                                    <img src={client.logo} alt={`${client.name} logo`} className="max-w-full max-h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-700">{client.name}</h3>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;