import React from 'react';
import Navbar from './Navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence, easeInOut } from "motion/react";
import { UpdateFollower } from 'react-mouse-follower';


const SlideRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: easeInOut,
        },
      },
      exit: {
        opacity: 0,
        x: -50,
        transition: {
          duration: 0.2,
          ease: easeInOut,
        },
      },
    };
  };
  

const HeroData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744199523/ChatGPT_Image_Apr_9_2025_05_19_15_PM_uvzbxo.png",
        title: "Berry Blast",
        subtitle: 
        "A vibrant fruit explosion packed with strawberries, blueberries, raspberries, and banana, naturally sweet, antioxidant-rich, and refreshingly delicious.", 
        price: "Rs.270",
        oldprice: "Rs.330",
        modal: "Berry Blast",
        bgColor: "#fb7691",
    }, 
    {
        id: 2,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744231142/5881c300-0434-4146-a805-d513358d7add_1_bqujoc.png",
        title: "Chocolate Banana Swirl",
        subtitle: 
        "Indulgent meets nutritious, a rich blend of ripe bananas, cocoa, and creamy goodness for the perfect guilt-free dessert smoothie.", 
        price: "Rs.310",
        oldprice: "Rs.380",
        modal: "Chocolate Rush",
        bgColor: "#EBD19B",
    }, 
    {
        id: 3,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744230028/ChatGPT_Image_Apr_10_2025_01_46_48_AM_kf3zcb.png",
        title: "Cucumber Cooler",
        subtitle: 
        "Light, crisp, and ultra-refreshing, this hydrating smoothie pairs cucumber, mint, and citrus for the ultimate cool-down in a glass.", 
        price: "Rs.210",
        oldprice: "Rs.270",
        modal: "Cool Cucumber",
        bgColor: "#4C730D",
    }
]



const Hero = () => {
  
  const [activeData, setActiveData ] = React.useState(HeroData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };


    return (
    <>
       <motion.div
       key={activeData.id}
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 1}}
       
       >


         {/*Navbar Component*/}
         <Navbar/>

         <div className="container grid grid-cols-1 md:grid-cols-2
         min-h-[680px]">
            {/*Data information */}
            <div className='flex justify-center py-14 flex-col md:py-0 xl:max-w-[500px]
            order-2 md:order-1 text-white relative z-40'>
                <div className=' text-center md:text-left space-y-5'>
                    <AnimatePresence mode="wait">
                    <UpdateFollower
                     mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 9999,  //on top of everything
                        followSpeed: 0.4, //following spped
                        rotate: -720, //spin effect
                        mixBlendMode: "difference", //blends with bg inverting colors
                        scale: 5, //bigger than normal 
                      }}
                    >
                    <motion.h1 
                    key={`title-${activeData.id}`}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-4xl lg:text-7xl xl:text-8xl 
                    font-extrabold font-handwriting text-shadow'>
                        {activeData.title}
                        </motion.h1>
                        </UpdateFollower>
                        </AnimatePresence>
                    <AnimatePresence mode="wait">
                    <motion.p
                      key={`subtitle-${activeData.id}`}
                     variants={SlideRight(0.4)}
                     initial="hidden"
                     animate="show"
                     exit="exit"
                    className='text-md text-white leading-loose'>
                        {activeData.subtitle}
                        </motion.p>
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                             mouseOptions={{
                                backgroundColor: activeData.bgColor,
                                zIndex: 9999,  //on top of everything
                                followSpeed: 0.4, //following spped
                                rotate: -720, //spin effect
                                backgroundElement: (
                                    <div>
                                        <img src={activeData.image} alt="" />
                                    </div>
                                ),
                                scale: 4, //bigger than normal 
                              }}
                            >
                    <motion.button 
                      key={`button-${activeData.id}`}
                     variants={SlideRight(0.6)}
                     initial="hidden"
                     animate="show"
                     exit="exit"
                     style={{color: activeData.bgColor}}
                    className='bg-white inline-block
                    font-normal rounded-lg px-4 py-2 text-black'>
                        Order Now
                        </motion.button>
                        </UpdateFollower>
                        </AnimatePresence>


                    {/*line separator */}
                    <motion.div
                     initial={{opacity:0}}
                     animate={{opacity:1}}
                     transition={{duration:0.5, delay:0.2, ease:"easeInOut"}}
                    className='items-center justify-center flex
                    md:justify-start gap-4 !md:mt-24 !mb-10'>
                        <div className='w-20 h-[2px] bg-white'></div>
                        <p className='font-bold'>BEST SELLERS</p>
                        <div className='w-20 h-[2px] bg-white'></div>
                    </motion.div>

                    {/*Image selector catalog*/}
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5, delay:0.2, ease:"easeInOut"}}

                    className='grid grid-cols-4 gap-10'>
                        {
                            HeroData.map((data) => {
                                return(

                                    <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: data.bgColor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 5,
                                        text: "Explore",
                                        textFontSize: "2.5px",
                                      }}
                                    >
                                    <div 
                                    key={data.id}
                                    onClick={() => handleActiveData(data)}
                                    className='cursor-pointer space-y-3 hover:scale-125
                                    transition-all duration-200'>
                                        <div className='flex justify-center'>
                                            <img src={data.image} alt="" 
                                           className={` h-[75px] img-shadow  ${activeData.image
                                            ===data.image ? "opacity-100 scale-110"
                                        : "opacity-50"}`} />
                                        </div>
                                        <div className='text-center !mt-6 space-y-1'>
                                            <p className='text-[14px] line-through opacity-50'>{data.oldprice}</p>
                                            <p className='text-[16px] font-bold'>{data.price}</p>
                                        </div>
                                    </div>
                                    </UpdateFollower>
                                );
                              
                            })
                        }
                    </motion.div>
                </div>
            </div>
            {/*Hero Image */}

            <div className='flex flex-col justify-end items-center
            relative order-1 md:order-2'>
                <AnimatePresence mode = "wait">
                <motion.img
                  key={`image-${activeData.id}`}
                 initial={{ opacity: 0, x: 100 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                 exit={{
                   opacity: 0,
                   // scale: 0.9,
                   x: -100,
 
                   transition: {
                     duration: 0.4,
                   },
                 }}
                src={activeData.image} alt="" 
                className='w-[250px] md:w-[350px] xl:w-[500px] 
                img-shadow relative z-10' />
                </AnimatePresence>
            
            <AnimatePresence mode='wait'>

            <motion.div 
            key={`modal-${activeData.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
            exit={{
              opacity: 0,
              // scale: 0.9,

              transition: {
                duration: 0.4,
              },
            }}
            className='text-white/10 text-[250px] font-bold
            font-poppins absolute top-0 left-1/2 -translate-x-1/2 translate-y-10'>
                    {activeData.modal}
                    </motion.div>
            </AnimatePresence>
            </div>
            {/*WhatsApp Icon */}
            <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                <a href="#">
                    <FaWhatsapp/>
                </a>
            </div>
         </div>
       </motion.div>
    </>
    );
  
}

export default Hero