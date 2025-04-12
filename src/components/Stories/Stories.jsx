import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';

const StoriesData = [
    {
        id:1, 
        title: "Morning Fuel-Up",
        desc: "I start every day with the Berry Blast — it’s like a sunrise in a glass! Energizing, fruity, and oh-so-refreshing.",
        link: "#",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744501285/pexels-cottonbro-6188602_rxoeb0.jpg"
    },
    {
        id:2, 
        title: "Guilt-Free Indulgence",
        desc: "Chocolate Banana Swirl is my go-to after workouts. Tastes like dessert but keeps me on track!",
        link: "#",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744501516/pexels-leah-rolando-2394241-4112870_xkpfmg.jpg"
    },
    {
        id:3, 
        title: "Mom’s Hydration Hack",
        desc: "Even my kids love the Cucumber Cooler! It’s hydrating, light, and perfect for sunny afternoons.",
        link: "#",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744501474/pexels-pavel-danilyuk-7055137_azzy43.jpg"
    },
    {
        id:4, 
        title: "Office Saviour",
        desc: "Midday slump? One sip of Tropical Tango and I’m back on track, refreshed and focused!",
        link: "#",
        image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1744501395/pexels-thirdman-6958496_uqnhkk.jpg"
    }
]

const Stories = () => {
  return <section className='bg-gray-50'>
    <div className="container py-14">
        <h1 className='text-5xl font-bold
        font-handwriting
        text-center pb-10'>
            Stories
        </h1>

        {/*Cards section */}
        <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-8'>
            {
                StoriesData.map((item) => (
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: "black",
                        zIndex: 999,
                        followSpeed: 1.5,
                        text: "Read",
                        textFontSize: "3px",
                        scale: 4,
                      }}
                    >
                    <div key={item.id}
                    className='flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                        <img src={item.image} 
                        alt="" 
                        />
                        <div className='space-y-2'>
                            <h1 className='text-xl font-bold
                            line-clamp-2 text-pink-950'>
                                {item.title}
                            </h1>
                            <p className='line-clamp-2 text-pink-900'>
                                {item.desc}
                            </p>
                        </div>
                        </div>
                        </UpdateFollower>
                ))
            }
        </div>
    </div>
  </section>
}

export default Stories