import React from 'react';
import Navbar from './Navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from "motion/react";


const HeroData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744199523/ChatGPT_Image_Apr_9_2025_05_19_15_PM_uvzbxo.png",
        title: "Berry Blast",
        subtitle: 
        "A vibrant fruit explosion packed with strawberries, blueberries, raspberries, and banana, naturally sweet, antioxidant-rich, and refreshingly delicious.", 
        price: "Rs. 270",
        modal: "Berry",
        bgColor: "#FCD4DD",
    }, 
    {
        id: 2,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744231142/5881c300-0434-4146-a805-d513358d7add_1_bqujoc.png",
        title: "Chocolate Banana Swirl",
        subtitle: 
        "Indulgent meets nutritious, a rich blend of ripe bananas, cocoa, and creamy goodness for the perfect guilt-free dessert smoothie.", 
        price: "Rs. 310",
        modal: "Chocolate",
        bgColor: "#EBD19B",
    }, 
    {
        id: 3,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744230028/ChatGPT_Image_Apr_10_2025_01_46_48_AM_kf3zcb.png",
        title: "Cucumber Cooler",
        subtitle: 
        "Light, crisp, and ultra-refreshing, this hydrating smoothie pairs cucumber, mint, and citrus for the ultimate cool-down in a glass.", 
        price: "Rs. 210",
        modal: "Cucumber",
        bgColor: "#4C730D",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744230024/ChatGPT_Image_Apr_10_2025_01_43_38_AM_sqmx0z.png",
        title: "Pumpkin Spice",
        subtitle: 
        "Cozy fall vibes in every sip, a creamy mix of pumpkin, cinnamon, and nutmeg with a hint of sweetness to warm your soul.", 
        price: "Rs. 240",
        modal: "Pumpkin",
        bgColor: "#6C1D00",
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
        transition={{ duration: 0.8}}
       
       >


         {/*Navbar Component*/}
         <Navbar/>

         <div className="container">
            {/*Data information */}
            {/*Hero Image */}
            {/*WhatsApp Icon */}
         </div>
       </motion.div>
    </>
    );
  
}

export default Hero