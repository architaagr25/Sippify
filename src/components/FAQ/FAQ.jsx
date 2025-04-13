import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';

const FaqData =[
    {
      "question": "Are your smoothies made with fresh or frozen ingredients?",
      "answer": "We use a mix of both fresh and flash-frozen fruits and vegetables to ensure maximum flavor and nutrition all year round."
    },
    {
      "question": "Do you offer vegan or dairy-free smoothie options?",
      "answer": "Yes! Many of our smoothies are vegan-friendly and made without any dairy. You can also customize any smoothie with plant-based milks like almond, oat, or coconut."
    },
    {
      "question": "Can I customize my smoothie?",
      "answer": "Absolutely! You can build your own smoothie by choosing your base, fruits, boosters, and add-ins to match your taste and dietary needs."
    },
    {
      "question": "Do your smoothies contain added sugar?",
      "answer": "Nope! Our smoothies are naturally sweetened with fruit. We never add refined sugars—just wholesome, delicious ingredients."
    }
  ]
  

const FAQ = () => {
    const[active, setActive] = React.useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    }
  return <div className='max-w-2xl mx-auto mt-20 mb-28 py-4'>
    <h1 className='text-4xl font-extrabold text-center
     pb-8 font-handwriting'> Frequently Asked Questions</h1>

    {
        FaqData.map((item, index) => (
            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "black",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 1.5,
                                  }}
                                >
            <div 
            className='mb-4 py-4 border-b border-pink-900 shadow-sm'
            
            key={index}>
                <div 
                className='justify-between items-center flex
                cursor-pointer py-4'
                onClick={()=>handleClick(index)}>
                    <h3 className='text-xl font-bold text-pink-950'>{item.question}</h3>
                    <span>{active === index ? "-" : "+"}</span>
                </div>
                {active === index && <p className='text-pink-900'>{item.answer}</p>}
            </div>
            </UpdateFollower>
        ))
    }
  </div>
}

export default FAQ