import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {motion} from 'motion/react';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Products';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';

const App = () => {
  return <main className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex:10,
        followSpeed:1,
        scale:1.5,
      }
      }
      >
      <Hero/>
      <Products/>
      <Banner/>
      <BannerText/>
      </UpdateFollower>
      </main>;
  
};

export default App;