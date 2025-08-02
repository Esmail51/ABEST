import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import oilRefinery from '../assets/images/contactUsbanner.webp';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//     <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
//         <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
//     </motion.div>
// );

const Contact: React.FC = () => {
    return (
        <>
            <section className="relative h-[400px] flex items-center text-white">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${oilRefinery})` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start"><Phone className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>+971 2 6766366</span></li>
                                <li className="flex items-start"><Mail className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>SALES@ABEST.AE</span></li>
                                <li className="flex items-start"><MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-orange-500" /> <span>FLAT NO. 708, 7TH FLOOR, AL GHAITH TOWER, P.O. BOX: 43596, HAMDAN BIN MOHAMMED STREET, ABU DHABI, U.A.E.</span></li>
                            </ul>
                            <div className="mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.597952999933!2d54.3644996149955!3d24.4820802842405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e678bed8b4e39%3A0x7c73a436502e4604!2sAl%20Ghaith%20Tower%20-%20Hamdan%20Bin%20Mohammed%20St%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1678886050519!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="mt-1 block w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                                    <input type="text" id="subject" className="mt-1 block w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="mt-1 block w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:ring-orange-500 focus:border-orange-500 transition"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact