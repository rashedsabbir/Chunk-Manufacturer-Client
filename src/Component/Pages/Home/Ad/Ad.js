import React from 'react';
import './Ad.css'
import appBanner from '../../../../images/banner/app-banner-1.jpg'
const Ad = () => {
    return (
        <div className='bg-menu1'>
            <div class="mockup-phone border-white">
          <div class="camera"></div> 
          <div class="display">
            <div class="artboard artboard-demo phone-1">
                
            <div class="card lg:card-sides bg-base-100 shadow-xl image-full">
  <figure><img src={appBanner} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title justify-center text-white py-3">Download our mobile app now!</h2>
    <p className='text-white'>Our app is available in play store and ios nameed ChunkManager. You can get 24/7 customer support there. </p>
    <p className='text-white'>You will have tutorial regarding how to use the app in the 'Tutorial' section. </p>
    
    
    <div class="card-actions justify-around outline-orange-700">
      <button class="btn outline outline-offset-2 outline-white bg-orange-700 text-white">Play Store</button>
      <button class="btn outline outline-offset-2 outline-white bg-orange-700 text-white">Ios</button>
    </div>
  </div>
</div>
</div>
</div>
          </div>
        </div> 
        
    );
};

export default Ad;