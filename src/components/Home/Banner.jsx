import React from 'react';
import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative h-[850px] ">
      {/* Top purple section */}
      <div className="bg-purple-600 text-white pt-16 pb-32 rounded-b-3xl text-center px-4  h-[500px]">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-sm md:text-base mb-6 max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-100 transition ">
          Shop Now
        </button>
      </div>

      {/* Overlapping Image */}
      <div className="absolute my-[250px] w-full bottom-0 translate-y-1/2 px-4">
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-3xl shadow-xl">
          <img
            src={bannerImage} // Replace this with the correct path or import
            alt="Gadget"
            className="rounded-2xl w-full h-[450px]"
          />
        </div>
      </div>

      {/* Spacer to make room for image */}
      <div className="h-[250px]" />
    </div>
    );
};

export default Banner;