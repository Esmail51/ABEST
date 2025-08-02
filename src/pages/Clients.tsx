import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Globe } from 'lucide-react';
import oilRefinery from '../assets/images/oilrefinaryImg.jpg';
import worldMapBg from '../assets/images/FooterBg.png'; 

// --- Client Data ---
const clients = [
    { name: "ADCO", logo: "https://abest.ae/wp-content/uploads/2025/02/clients.jpg" },
    { name: "ADGAS", logo: "https://abest.ae/wp-content/uploads/2025/02/2-1.jpg" },
    { name: "AADC", logo: "https://abest.ae/wp-content/uploads/2025/02/3-1.jpg" },
    { name: "ADMA-OPCO", logo: "https://abest.ae/wp-content/uploads/2025/02/4-1.jpg" },
    { name: "ADNOC", logo: "https://abest.ae/wp-content/uploads/2025/02/5-1.jpg" },
    { name: "FERTIL", logo: "https://abest.ae/wp-content/uploads/2025/02/6-1.jpg" },
    { name: "GASCO", logo: "https://abest.ae/wp-content/uploads/2025/02/7-1.jpg" },
    { name: "TAKREER", logo: "https://abest.ae/wp-content/uploads/2025/02/8-1.jpg" },
    { name: "NDC", logo: "https://abest.ae/wp-content/uploads/2025/02/9-1.jpg" },
    { name: "NPCC", logo: "https://abest.ae/wp-content/uploads/2025/02/10-2.jpg" },
    { name: "Ramsys Engineering", logo: "https://abest.ae/wp-content/uploads/2025/02/11-2.jpg" },
    { name: "ETISALAT", logo: "https://abest.ae/wp-content/uploads/2025/02/12-2.jpg" },
    { name: "Borouge", logo: "https://abest.ae/wp-content/uploads/2025/02/13-2.jpg" },
    { name: "Govt. of Ras Al Khaimah", logo: "https://abest.ae/wp-content/uploads/2025/02/14-2.jpg" }
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