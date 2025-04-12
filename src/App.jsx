import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {motion} from 'motion/react';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Products';

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
      </UpdateFollower>
      </main>;
  
};

export default App;