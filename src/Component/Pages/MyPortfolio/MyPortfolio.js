import React from 'react';
import portfolio from '../../../images/portfolio/3.jpg'
const MyPortfolio = () => {
    return (
        
        <div class="hero min-h-screen bg-menu1">
            
  <div class="hero-content flex-col sm-px-28 lg:flex-row">
      
    <img src={portfolio} className='hover:scale-75  rounded-lg sm:w-16 sm-h-16 lg:w-48 shadow-2xl' />
    <div className=''>
      <h1 class="text-5xl text-left font-bold">Rashedul Hassan Sabbir</h1>
      <hr />
      <p class="py-2 text-left text-2xl"><span className='text-gray-900'>Email:</span> rashedulhasan1996@gmail.com</p>
      <p class="py-2 text-left text-2xl"><span className='text-gray-900'>Educational background:</span> B.Sc. in Computer Science and Engineering at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj</p>
      <p class="py-2 text-left text-2xl"><span className='text-gray-900 '>Technological Skills:</span> Reactjs, Tailwind CSS MongoDB, Expressjs, Nodejs, Bootstrap, Daisyui, React Router, Api, Firebase.</p>
      <hr />
      <p className='py-2 text-left text-2xl'>Projects: <br /><button class="btn btn-primary bg-gray-900"><a href="https://sareealoy.web.app" class="text-white visited:text-orange-400">
  Saree Warehouse Management Website
</a></button> <button class="btn btn-primary bg-gray-900"><a href="https://assignment-10-8dff4.web.app" class="text-white visited:text-orange-400">
  Service Provider website
</a></button> <button class="btn btn-primary bg-gray-900"><a href="https://keen-starlight-82b2cc.netlify.app" class="text-white visited:text-orange-400">
  Product Review Analysis Website
</a></button></p>
      
    </div>
  </div>
</div>
    );
};

export default MyPortfolio;