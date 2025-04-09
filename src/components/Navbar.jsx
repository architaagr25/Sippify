import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
    {
        id: 1,
        title: "Sip_Hub",
        link: "#",
      },
      {
        id: 2,
        title: "Flavors",
        link: "#",
      },
      {
        id: 3,
        title: "Sip_Stories",
        link: "#",
      },
      {
        id: 4,
        title: "Our_Vibe",
        link: "#",
      },
      {
        id: 5,
        title: "Hit_Us_Up",
        link: "#",
      },
]

const Navbar = () => {
  
     return ( 
     <div className='bg-[#fb7691] text-black py-6'>
        <div className="container flex items-center justify-between">
            {/*this is logo section*/}
            <div>
                <img src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1744150925/ChatGPT_Image_Apr_9_2025_03_51_50_AM_gfksc1.png" alt=""
                className='max-w-[100px]' />
            </div>
            {/*this is menu section*/}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-4 relative Z-40'>
                    {NavbarMenu.map((item)=>(
                        <li>
                            <a href={item.link} 
                            className='inline-block text-base 
                            font-[cursive] font-semibold py-2 px-3 '>{item.title}</a>
                        </li>
                    ))}   

                    <button className='text-xl ps-14'>
                        <FaRegUser />    
                    </button> 
                </ul>
            </div>

            {/*hamburger icon*/}
                <div className='md:hidden'>
                    <TiThMenu className='text-4xl'/>
                </div>
        </div>
     </div>
     );
  
};

export default Navbar;