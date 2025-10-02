import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, Waves, FlaskConical } from 'lucide-react';
import oilRefinery from '../assets/images/productPage.webp';
import FlameSpecIR3HDImg from '../assets/images/Product Pics/fgd/ir3 flame without and with camera.webp';
import OxygenGasSensorImg from '../assets/images/Product Pics/mettler/Inpro 6900i.jpg';
import GasAnalyserImg from '../assets/images/Product Pics/servomax/servopro 4100.webp';
import MultiChannelAnalyzerImg from '../assets/images/THORNTON770MAX.webp';
import PortableGasANalyzerImg from '../assets/images/Product Pics/servomax/Servoflex-Servomex-5100.webp';
import OxygenAnalyzer from '../assets/images/Product Pics/Michell Instruments/easidewproxp.png';
import NavigationAndAidsImg from '../assets/images/Product Pics/orga/foghorn.jpg';
import SoundHornImg from '../assets/images/soundHorn.webp';
import VisibilityMeterImg from '../assets/images/visibiltyMeter.webp';
import WinCompassImg from '../assets/images/Product Pics/hobre/wobbe index.jpg';
// import Wim9900Img from '../assets/images/Wim9900.webp';
// import RockMountAnalyzerImg from '../assets/images/rockMountANalyzer.webp';
import BirdDetersentSystem from '../assets/images/Product Pics/scarecrow/bird deterrent system.jpg';
import mettlerPh from '../assets/images/Product Pics/mettler/inpro 7100i.jpg'
import conductivityMeter from '../assets/images/Product Pics/mettler/conductivity meter.jpg'








// Main Page Component
const Products: React.FC = () => {
    const [activeTab, setActiveTab] = useState('oil_gas');

    const tabs = [
        { id: 'oil_gas', label: 'Oil & Gas', icon: <Thermometer size={20}/> },
        { id: 'marine', label: 'Marine', icon: <Waves size={20}/> },
        { id: 'chemical', label: 'Chemical', icon: <FlaskConical size={20}/> },
    ];

    return (
        <div className="bg-white">
            {/* --- NEW, UNIFIED HERO & TABS SECTION --- */}
            <div className="relative flex flex-col justify-center items-center h-[60vh] min-h-[500px] text-white text-center px-4" style={{
                backgroundImage: `url(${oilRefinery})`, //
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                
                <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Advanced Technical Solutions</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                        Precision instruments and robust systems engineered for the most demanding industries.
                    </p>
                </motion.div>
                
                {/* Integrated Tabs */}
                <motion.div 
                    className="absolute bottom-10 z-10 bg-white/10 backdrop-blur-lg p-2 rounded-xl shadow-2xl border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    <div className="flex items-center space-x-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium transition-colors rounded-lg ${
                                    activeTab === tab.id ? 'text-orange-400' : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/20 rounded-lg"
                                        layoutId="activePill"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* --- Tab Content --- */}
            <main className="py-16 md:py-24 bg-gray-50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        {activeTab === 'oil_gas' && <OilGasContent />}
                        {activeTab === 'marine' && <MarineContent />}
                        {activeTab === 'chemical' && <ChemicalContent />}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};


// --- Reusable Product Card Component (No Changes Needed Here) ---
const ProductCard: React.FC<{
    image: string;
    title: string;
    description: string;
    category: string;
}> = ({ image, title, description, category }) => (
    <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-lg group relative border border-gray-200"
        whileHover={{ scale: 1.03, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">{category}</div>
        <div className="h-56 w-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

// --- Content for Tabs (No Changes Needed Here) ---

const OilGasContent = () => (
    <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Oil & Gas Industry</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Ensuring safety and efficiency with high-precision analyzers and detection systems designed for the rugged demands of the oil and gas sector.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
                title="FlameSpec-IR3-HD" 
                category="Fire & Gas Detection"
                image={FlameSpecIR3HDImg}
                description="An advanced Triple IR (IR3) flame detector that provides ultra-fast detection of fires and explosions, minimizing risk and maximizing safety." 
            />
            <ProductCard 
                title="Mettler Toledo InPro6800" 
                category="Oxygen Gas Sensor"
                image={OxygenGasSensorImg}
                description="Amperometric oxygen gas sensor for in-line measurement in chemical processes, offering high availability and excellent performance without complex sampling systems." 
            />
            <ProductCard 
                title="SERVOPRO 4100" 
                category="Gas Analyser"
                image={GasAnalyserImg}
                description="A versatile process control analyser that can measure up to four gases simultaneously, featuring stable, reliable sensors and low maintenance." 
            />
             <ProductCard 
                title="I9400" 
                category="Multi-Channel Analyzer"
                image={MultiChannelAnalyzerImg}
                description="A powerful multi-parameter transmitter with Smart Sensor Technology, capable of monitoring up to 6 channels for a wide range of measurements." 
            />
            <ProductCard 
                title="SERVOMEX Micro i.s (5100 i.s)" 
                category="Portable Gas Analyser"
                image={PortableGasANalyzerImg}
                description="An intrinsically safe portable analyser certified for zone 0. It uses non-depleting technologies to measure O2, CO2, and CO levels." 
            />
             <ProductCard 
                title="XTP600 Oxygen Analyzer" 
                category="Oxygen Analyzer"
                image={OxygenAnalyzer}
                description="When a process oxygen application demands high accuracy and stability, along with lowest maintenance cost, paramagnetic oxygen technology is usually preferred. If, in addition, the application calls for a rugged and reliable, corrosion resistant analyzer, the thermo-paramagnetic principle of Michell’s new XTP600 series makes it the instrument of choice." 
            />
            <ProductCard 
                title="WIM COMPASS Series" 
                category="Process Analyzer"
                image={WinCompassImg}
                description="The latest in process analyzers from Hobré Instruments for measuring Wobbe Index, Heating Value/BTU, and Combustion Air Requirement Index." 
            />
        </div>
    </div>
);

const MarineContent = () => (
    <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Marine Industry</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Critical navigation aids, lighting, and signaling systems that ensure maritime safety and compliance in the harshest offshore environments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
                title="Marine Navigation Aids" 
                category="Navigation & Lighting"
                image={NavigationAndAidsImg}
                description="Comprehensive range of marine lanterns, foghorns, and obstruction lights like the L330, L303EX, and L75SA-R-AC-32 for reliable offshore visual coverage." 
            />
            <ProductCard 
                title="Explosion Proof Foghorn" 
                category="Signalling Systems"
                image={SoundHornImg}
                description="The FH800(3)EX(-SS) is designed to provide 2 nautical miles of omni-directional coverage, meeting IALA and DGSM regulatory requirements for offshore structures." 
            />
             <ProductCard 
                title="VDX05EX Fog Detector" 
                category="Visibility Meter"
                image={VisibilityMeterImg}
                description="A reliable and low-maintenance visibility meter designed to withstand harsh offshore conditions and automatically trigger foghorns or lights." 
            />
            <ProductCard 
                title="Bird Deterrent Sysytem" 
                category="Signalling Systems"
                image={BirdDetersentSystem}
                description="A bird deterrent system is a method or combination of methods used to prevent birds from roosting or nesting in unwanted areas, such as agricultural fields, buildings, or industrial sites, by using physical barriers, visual deterrents, sound, or irritants" 
            />
        </div>
    </div>
);

const ChemicalContent = () => (
    <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Chemical Industry</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Process analyzers that provide precise measurements of fuel gas composition to ensure stability, prevent unwanted emissions, and meet contractual specifications.
        </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* <ProductCard 
                title="WIM 9900 Series" 
                category="Wobbe Index Analyzer"
                image={Wim9900Img}
                description="Measures Wobbe Index and Calorific Value for various gases. It offers an unmatched combination of response time, accuracy, and availability." 
            /> */}
            {/* <ProductCard 
                title="OMA-406 Rack Mount" 
                category="Rack Mount Analyzer"
                image={RockMountAnalyzerImg}
                description="Classic OMA performance in a lab-friendly, rack-mounted form factor, providing typical OMA outputs like 4-20mA, RS232, and Modbus." 
            /> */}
            <ProductCard 
                title="Mettler Toledo PH" 
                category="Conductivity Analyzer"
                image={mettlerPh}
                description="Digital pH sensors are sensors that provide a reliable, digital pH measurement signal for in-line measurement applications. METTLER TOLEDO's digital pH probes use Intelligent Sensor Management (ISM) technology." 
            />
             <ProductCard 
                title="Conductivity Analyzer" 
                category="Conductivity Analyzer"
                image={conductivityMeter}
                description="A conductivity sensor measures the ability of a solution to conduct an electrical current. It is the presence of ions in a solution that allow the solution to be conductive: the greater the concentration of ions, the greater the conductivity." 
            />
        </div>
    </div>
);

export default Products;