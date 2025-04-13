import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {motion} from 'motion/react';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Products';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';
import Stories from './components/Stories/Stories';
import FAQ from './components/FAQ/FAQ';

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
      <Stories/>
      <FAQ/>
      </UpdateFollower>
      </main>;
  
};

export default App;