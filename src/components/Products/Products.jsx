import React from 'react';
import {motion} from "motion/react";

export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity:0,
            y:100,
        },
        show: {
            opacity: 1,
            y:0,
            transition: {
                duration : 0.5,
                delay: delay,
            }
        }
    }
}

const ProductsData = [
    {
        id: 1,
        title: "Berry Blast",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744199523/ChatGPT_Image_Apr_9_2025_05_19_15_PM_uvzbxo.png",
        desc: "A bold fusion of juicy berries bursting with flavor — energizing, colorful, and the ultimate fruity punch in a glass.",
        delay: 0.5,
    },
    {
        id: 2,
        title: "Choco-Banana Swirl",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744231142/5881c300-0434-4146-a805-d513358d7add_1_bqujoc.png",
        desc: "Smooth, creamy, and decadent — where sweet bananas meet rich chocolate for a dreamy dessert-like delight.",
        delay: 0.8,
    },
    {
        id: 3,
        title: "Cucumber Cooler",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744230028/ChatGPT_Image_Apr_10_2025_01_46_48_AM_kf3zcb.png",
        desc: "A crisp, clean sip of serenity — refreshing cucumber mingles with mint and citrus for a spa-in-a-glass experience.",
        delay: 1.1,
    },

]

const Products = () => {
  return <div className='bg-gray-100 py-8'>
    <div className='container py-14'>
        <motion.h1 
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        className='text-4xl font-extrabold 
        text-center pb-10 font-serif'>Meet the Smoothie Squad</motion.h1>

        {/*Cards section */}
        <div className='grid grid-cols-1 
                    sm:grid-cols-2 md:grid-cols-3
                    gap-6'>
            {
                ProductsData.map((item) => (
                    <motion.div 
                    variants= {fadeUp(item.delay)}
                    key={item.id}
                    initial="hidden"
                    whileInView={"show"}
                    
                    className="flex flex-col items-center
                     justify-center p-5 max-w-[300px] 
                     mx-auto shadow-lg rounded-2xl bg-pink-50">
                         <h1 className='text-center text-2xl font-bold
                            font-handwriting space-y-2'>{item.title}
                            </h1>

                        <img src={item.image} 
                        alt=""
                        className='w-[100px] mb-4 hover:rotate-12
                        hover:scale-110 duration-300' 
                        />
                        <div className='text-center space-y-2'>
                           
                            <p className='text-center text-gray-600
                            text-sm'>{item.desc}
                            </p>
                            <button className="!mt-5 border-2
                             border-pink-900 text-pink-800 px-6 py-2 
                             rounded-md hover:bg-pink-700
                              hover:text-white duration-200">
                                 Add to Blender
                                </button>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </div>

  </div>
  
}

export default Products