import React from 'react';
import portfolio from '../../../images/portfolio/3.jpg'
const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col px-28 lg:flex-row">
    <img src={portfolio} className='hover:scale-75 max-w-sm rounded-lg sm:w-16 lg:w-48 shadow-2xl' />
    <div className=''>
      <h1 class="text-5xl font-bold">Rashedul Hassan Sabbir</h1>
      <p class="py-2 text-2xl"><span className='text-indigo-500'>Email:</span> rashedulhasan1996@gmail.com</p>
      <p class="py-2 text-2xl"><span className='text-indigo-500'>Educational background:</span> B.Sc. in Computer Science and Engineering at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj</p>
      <p class="py-2 text-2xl"><span className='text-indigo-500'>Technological Skills:</span> Reactjs, MongoDB, Expressjs, Nodejs, Bootstrap, Daisyui, React Router, Api, Firebase.</p>
      <p className='py-2 text-2xl'>Projects: <button class="btn btn-primary"><a href="https://sareealoy.web.app" class="text-white visited:text-orange-400">
  Saree Warehouse Management Website
</a></button> <button class="btn btn-primary"><a href="https://https://assignment-10-8dff4.web.app" class="text-white visited:text-orange-400">
  Service Provider website
</a></button> <button class="btn btn-primary"><a href="https://https://keen-starlight-82b2cc.netlify.app" class="text-white visited:text-orange-400">
  Product Analysis Website
</a></button></p>
      
    </div>
  </div>
</div>
    );
};

export default MyPortfolio;