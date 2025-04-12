import React from 'react';

const BannerText = () => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <div className="bg-gradient-to-br from-pink-400 to-pink-800/70 text-white 
        rounded-2xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
          <p className="font-bold text-md md:text-3xl max-w-[800px] mx-auto leading-normal">
          Every sip of our smoothies brings a burst of goodness—fuel
           your day with vibrant flavors and wholesome vibes!
          </p>
        </div>
      </div>
    </section>
  )
}

export default BannerText