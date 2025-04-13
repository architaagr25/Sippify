import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
  } from "react-icons/fa";
  import { FaMapLocation } from "react-icons/fa6";
  import { motion } from "motion/react";
  import CardsImg from "../../assets/credit-cards.webp";


  

const Footer = () => {
  return (
    <footer className='bg-pink-300 pt-12 pb-8 text-black'>
        <div className='container'>
            <div className='grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/*details section*/}
                <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay: 0.2,
                    duration:0.6,
                }}
                className='space-y-6'>
                    <img src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1744150925/ChatGPT_Image_Apr_9_2025_03_51_50_AM_gfksc1.png" 
                    alt="" className='max-w-[100px]' />
                    <div>
                        <p className='flex items-center gap-2
                        hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100
                        '>
                            <FaPhone/>
                            +91 8888888888
                        </p>
                        <p className='flex items-center gap-2 mt-2
                         hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>
                            {" "}
                            <FaMapLocation /> New Delhi
                        </p>
                    </div>
                </motion.div>
                {/*Links section*/}
                <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay: 0.4,
                    duration:0.6,
                }}
                className='space-y-6'>

                    <h1 className='text-3xl font-bold'>
                        Quick Links
                    </h1>
                    <div className='gap-3 grid grid-cols-1 
                    sm:grid-cols-2'>
                            <div>
                                <ul className='space-y-2'>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Home</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Contact Us</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>About</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                            <ul className='space-y-2'>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>More</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Supporters</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Help</li>
                                    <li className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Stories</li>
                                </ul>
                            </div>
                    </div>
                </motion.div>
                {/**Social links section */}
                <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay: 0.8,
                    duration:0.6,
                }}
                className='space-y-6'>

                    <h1 className='font-bold text-3xl
                    '>Follow Us</h1>
                    <div className='flex gap-3 items-center'>
                        <FaFacebook className='text-3xl
                        duration-300 hover:scale-125'/>
                        <FaInstagram className='text-3xl
                        duration-300 hover:scale-125'/>
                        <FaGoogle className='text-3xl
                        duration-300 hover:scale-125'/>
                        <FaTelegram className='text-3xl
                        duration-300 hover:scale-125'/>
                    </div>
                    <div className="space-y-2">
                            <p className='hover:font-semibold hover:scale-y-125
                                     hover:text-pink-950 transition duration-100'>Payment Methods</p>
                            <img src={CardsImg} alt="" />
                    </div>
                    </motion.div>
                    
            </div>
            {/*Copyrights*/}
            <p className="text-center mt-8 border-t-2
                     border-pink-950/40 pt-8">
          Copyright &copy; 2025. All Rights Reserved
        </p>
        </div>
    </footer>
  );
  
}

export default Footer