import React from 'react';

import {Carousel} from '3d-react-carousal';
import './Gallery.css'
import firstGarage from '../../../../images/banner/first-garage.jpg'
import gear from '../../../../images/banner/gear.jpg'
import fuelTank from '../../../../images/banner/fuel-tank.jpg'
import painting from '../../../../images/banner/painting.jpg'
import tire from '../../../../images/banner/tire.jpg'
import engine from '../../../../images/banner/engine.jpg'
import dashboard from '../../../../images/banner/dashboard.jpg'
import headlight from '../../../../images/banner/headlight.jpg'
import secondEngine from '../../../../images/banner/engine-2.jpg'
const Gallery = () => {
   
    let slides = [
        <div className="relative">
        <img  src={firstGarage} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Our first Garage</p>
    <small className="text-pink-600 lg:text-base">Where all started</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={fuelTank} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Fuel Tanks</p>
    <small className="text-pink-600 lg:text-base">Long lasting comparability and branded</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={gear} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Gear</p>
    <small className="text-pink-600 lg:text-base">BMW, Ferrari, Ford all available</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={painting} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Painting</p>
    <small className="text-pink-600 lg:text-base">Long lasting paint quality provided</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={headlight} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Headlight</p>
    <small className="text-pink-600 lg:text-base">Your life depends on it!</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={engine} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Engine</p>
    <small className="text-pink-600 lg:text-base">Limitless speed in seconds</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={tire} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Tire</p>
    <small className="text-pink-600 lg:text-base">Comfortable driving experience</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={secondEngine} alt="1" /> 
    <div className="absolute `lg:top-3/4 top-2/4` font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Suspension</p>
    <small className="text-pink-600 lg:text-base">Take on the road like a beast</small>
    </div>
    </div>,
        <div className="relative">
        <img  src={dashboard} alt="1" /> 
    <div className="absolute lg:top-3/4 top-2/4 font-bold lg:left-3/4 left-2/4 lg:py-4 lg:px-8 p-2 bg-black bg-opacity-30">
    <p className=' text-white lg:text-4xl text-base'>Dashboard</p>
    <small className="text-pink-600 lg:text-base">You name, we provide</small>
    </div>
    </div>,
        ];
    return (
        <div className=" h-full py-10 bg-gallery-img ">
             <div className="mb-2 ">
           <h2 className="text-wheat-200 text-3xl font-bold  text-center">| Chunks Gallery</h2>
           <p className='text-blue-500'>Best parts are Available</p>
           </div>
          <div className="overflow-hidden h-full">
          <Carousel slides={ slides} className="w-96 h-96 bg-red-500" interval={1000}  cancelOnInteraction={false} >
  </Carousel>
          </div>
        </div>
    );
};

export default Gallery;