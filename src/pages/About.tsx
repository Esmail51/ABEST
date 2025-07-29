import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Users } from 'lucide-react';

// --- Image Imports for the new section ---
import AboutImg from '../assets/images/image 4.png';
import oilRefinery from '../assets/images/oilrefinaryImg.jpg';
import supplyImage from '../assets/images/oilPlant.png';
import installationImage from '../assets/images/firefighters.png';
import servicingImage from '../assets/images/saftey.png';
import manpowerImage from '../assets/images/image 4.png'; // Re-using the engineer image

// --- Animation Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, duration: 1 } },
};
  
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, duration: 1 } },
};

// --- Reusable Components ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="text-center mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
  </motion.div>
);

// --- New Component for the "What We Do" Section ---
const ImageFeature: React.FC<{
  image: string;
  title: string;
  children: React.ReactNode;
  imageLeft?: boolean;
}> = ({ image, title, children, imageLeft = false }) => {
  const imageVariants = imageLeft ? fadeInLeft : fadeInRight;
  const textVariants = imageLeft ? fadeInRight : fadeInLeft;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20`}>
      <motion.div
        className={`relative rounded-lg overflow-hidden shadow-2xl group ${imageLeft ? 'md:order-1' : 'md:order-2'}`}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </motion.div>
      
      <motion.div
        className={`p-6 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
      </motion.div>
    </div>
  );
};


// --- Main About Page Component ---
const About: React.FC = () => (
  <>
    {/* --- Hero Section --- */}
    <motion.section 
      className="relative h-[400px] flex items-center justify-center text-white text-center"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${oilRefinery})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold leading-tight">
          About ABEST
        </motion.h1>
      </div>
    </motion.section>

    {/* --- Welcome & Overview Section --- */}
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInLeft}>
            <img
              src={AboutImg}
              alt="ABEST Engineer"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInRight}>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">A Legacy of Trust and Expertise</h2>
            <div className="w-24 h-1 bg-orange-500 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Aber Ahmed Equipment Est. (ABEST)</strong> is a reputed, GL Certified Trading and Technical Service Company in Abu Dhabi, UAE. Managed by qualified professionals with two decades of experience, we have become a cornerstone in the Oil, Gas, Marine, and Industrial sectors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our success stems from an unwavering focus on anticipating market trends, identifying customer needs, delivering value-added services, and keeping pace with technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* --- NEW "What We Do" Section with Images --- */}
    <section className="py-20 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>What We Do</SectionTitle>
            <div className="space-y-16">
                <ImageFeature image={supplyImage} title="Supplier of Oil/Gas & Marine Materials" imageLeft>
                    We supply a comprehensive range of materials including Navigation Aids, Weather Monitoring Systems, Workshop & Laboratory Equipment, PPE, Gas Analysers, Explosion Proof Electrical Equipment, Process Control Instruments, and more.
                </ImageFeature>
                <ImageFeature image={installationImage} title="Installation & Commissioning">
                    We specialize in the installation and commissioning of H2S, CO, Hydrocarbon, Navigation Aid systems, and other critical Gas Detection, Warning, and Process Control Instrumentation systems.
                </ImageFeature>
                <ImageFeature image={servicingImage} title="Servicing & Repairing" imageLeft>
                    Our service facilities in Abu Dhabi and Dubai handle servicing, repair, and certification for all leading brands of Breathing Apparatus, Gas Detection Systems, and more. We offer both preventive and breakdown maintenance.
                </ImageFeature>
                <ImageFeature image={manpowerImage} title="Supply of Specialist Manpower">
                    We provide specialist manpower for DCS, Process Instruments, Analysers, and Fire & Gas systems from the U.K, India, and Pakistan for onshore and offshore locations, including complete turnkey Fire & Gas installations.
                </ImageFeature>
            </div>
        </div>
    </section>

    {/* --- Our Team Section --- */}
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Our Professional Team</SectionTitle>
            <motion.div 
                className="max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInUp}
            >
                <Users className="text-orange-500 mx-auto mb-6 h-20 w-20" />
                <p className="text-gray-600 leading-relaxed">
                    Our strength is our team of dedicated professionals. With a wealth of experience, our engineers, technicians, and support staff work collaboratively to deliver outstanding results. We have also successfully executed complete turnkey Fire & Gas Installations on board oil tankers for leading owners like Adnatco, Vela International, and more in major shipyards.
                </p>
            </motion.div>
        </div>
    </section>
  </>
);

export default About;