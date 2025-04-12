import React from 'react';
import {motion} from "motion/react";
import { fadeUp} from "../../components/Products/Products";


const Banner = () => {
  return <section>
        <div className="container grid grid-cols-1
        md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
            {/*Image section*/}
            <div className='relative'>
                <motion.img 
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:0.2, ease:"easeInOut"}}
                src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1744497267/ChatGPT_Image_Apr_13_2025_04_02_31_AM_kjovdu.png" 
                alt=""
                className='relative z-10 mx-auto
                w-[300px] md:w-[400px]'
                 />
                 <motion.img
                  initial={{opacity:0, y:-100, rotate:-180, scale:0}}
                  whileInView={{opacity:1, x:0, rotate:0, scale:1}}
                  transition={{duration:0.8, delay:0.2, ease:"easeInOut"}}
                 src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1744497242/ChatGPT_Image_Apr_13_2025_04_02_37_AM_nkko92.png" 
                 alt="" 
                 className='absolute z-0 bottom-0'/>

            </div>
            {/*Information section */}
            <div className='justify-center flex flex-col'>
               <div className='text-center md:text-left
               lg:max-w-[450px] space-y-4'>
               <motion.h1 
               variants={fadeUp(0.5)}
               initial="hidden"
               whileInView="show"
               className='text-4xl lg:text-5xl
                font-bold font-handwriting'>Burst Into Flavor
                </motion.h1>
                <motion.p 
                 variants={fadeUp(0.7)}
                 initial="hidden"
                 whileInView="show"
                className='text-pink-950 pt-10'>
                Welcome to a world where every 
                sip is a celebration of flavor, 
                freshness, and feel-good energy.
                 Our smoothies are crafted with the finest fruits,
                  blended to perfection, and designed to fuel your day 
                  with a burst of natural goodness. Whether you're in
                   the mood to energize, cool down, or just treat 
                   yourself—there’s a smoothie waiting 
                   to swirl its magic.
                </motion.p>
                <motion.button 
                 variants={fadeUp(0.9)}
                 initial="hidden"
                 whileInView="show"
                className="!mt-5 border-2
                             border-pink-900 text-pink-800 px-6 py-2 
                             rounded-md hover:bg-pink-700
                              hover:text-white duration-200">
                                Buy Now</motion.button>
               </div>
            </div>
        </div>
  </section>;
}

export default Banner