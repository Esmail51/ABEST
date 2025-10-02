import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Users, Briefcase, Wrench, Package, HardHat } from 'lucide-react';

// --- Image Imports ---
import AboutImg from '../assets/images/Oil-and-gas-Contracting.jpg';
import supplyImage from '../assets/images/aboutUsWhatWedo.webp';
import installationImage from '../assets/images/aboutusInstallation.webp';
import servicingImage from '../assets/images/servicingImg.webp';
import manpowerImage from '../assets/images/manpower.webp';
import BannerImg from '../assets/images/aboutBanner.webp';

// --- Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// --- Reusable Section Title ---
const SectionTitle: React.FC<{ children: React.ReactNode, subtitle: string }> = ({ children, subtitle }) => (
    <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
    >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
    </motion.div>
);

// --- New Service Card Component ---
const ServiceCard: React.FC<{ image: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ image, title, children, icon }) => (
    <motion.div
        className="bg-white rounded-lg shadow-xl overflow-hidden group border border-transparent hover:border-orange-500 transition-all duration-300"
        variants={fadeInUp}
    >
        <div className="h-56 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <div className="flex items-center mb-3">
                <span className="text-orange-500 mr-3">{icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{children}</p>
        </div>
    </motion.div>
);


// --- Main About Page Component ---
const About: React.FC = () => (
  <div className="bg-white">
    {/* --- Hero Section --- */}
    <section className="relative h-[450px] flex items-center justify-center text-white text-center" style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">About ABEST</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            A Legacy of Trust and Expertise in Industrial Solutions
        </p>
      </motion.div>
    </section>

    {/* --- Who We Are Section --- */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Aber Ahmed Equipment L.L.C - S.P.C. (ABEST)</strong> is a reputed Trading and Technical Service Company located in Abu Dhabi, United Arab Emirates.
                    </p>
                    <p>
                      Abest is an ISO 9001 Certified Company managed by a team of Qualified Professional having two decades of experience in Oil, Gas, Marine and Industrial sectors of U.A.E. Abest is in business for three decade. During this period we have gained the trust and goodwill of our various clients. Our clients base continues to grow not just in U.A.E but in neighbouring Countries as well. Our range of Products and Services has also grown to meet different market demands. However, our core business continues to be in the fields of Process analyzers, Automation Control and Calibration/Testing. Abest success in this challenging market is the result of an unswerving focus on anticipating market trends, identifying and meeting our customer's requirements, providing them with value-added services and keeping up with advances in technology.
                    </p>
                </div>
          </motion.div>
          <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
            <img
              src={AboutImg}
              alt="ABEST Operations"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* --- What We Do Section --- */}
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle subtitle="Our core capabilities are designed to support your operations from start to finish.">
                What We Do
            </SectionTitle>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <ServiceCard image={supplyImage} title="Supplier Of Oil/Gas & Marine Materials" icon={<Package size={24}/>}>
                   Abest is a supplier Of Oil/Gas & Marine Materials including Navigation Aids systems, Weather Monitoring Systems, Workshop & Laboratory Equipment, Personal Protection Equipment, Gas & Liquid Analyzers, Explosion Proof Electrical Equipment, Electrical Safety Kits, Process Control Instruments, Pressure Gauge, Flow Meters, Test & Calibration Equipment. and Bird deterrent System.
                </ServiceCard>
                <ServiceCard image={installationImage} title="Installation & Commissioning" icon={<Wrench size={24}/>}>
                    Specialized in Integration of Sampling System for all kinds of Gas & Liquid Analyzers & Shelters for Analyzers. We also have Specialized team in installation & commissioning of gas & liquid analyzers, navigation aid systems.
                </ServiceCard>
                <ServiceCard image={servicingImage} title="Servicing & Repairing" icon={<Briefcase size={24}/>}>
                    Servicing & Repair of all leading brands of Analyzers, Gas detection & warning Systems. We also undertake maintenance contracts and Certification of the above System. Abest has Service facility in Musaffah, Abu Dhabi to Carry out after sales Services.
                </ServiceCard>
                <ServiceCard image={manpowerImage} title="Supply of Specialist Manpower" icon={<HardHat size={24}/>}>
                    We provide specialist manpower for DCS, Process Instruments, and Fire & Gas systems for onshore and offshore locations, including complete turnkey installations.
                </ServiceCard>
            </motion.div>
        </div>
    </section>

    {/* --- Our Team Section --- */}
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle subtitle="Our strength lies in our people. A team of dedicated and highly skilled professionals committed to excellence.">
                Our Professional Team
            </SectionTitle>
            <motion.div 
                className="max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInUp}
            >
                <Users className="text-orange-500 mx-auto mb-6 h-20 w-20" />
                <p className="text-gray-600 leading-relaxed">
                    With a wealth of experience, our engineers, technicians, and support staff work collaboratively to deliver outstanding results. We have also successfully executed complete turnkey Fire & Gas Installations on board oil tankers for leading owners like Adnatco, Vela International, and more in major shipyards.
                </p>
            </motion.div>
        </div>
    </section>
  </div>
);

export default About;