import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({car}) => {
    const {_id,name,price,pic,madeyear,brand, color, status, rating}=car
    return (
       <Link to={'/car/'+ _id}>
            <div className="shadow-lg bg-menu1 overflow-hidden">
            <div className="w-full lg:h-64 overflow-hidden relative ">
                <img src={pic} alt="" className=" transform transition-transform hover:scale-110"/>
                <button className="absolute top-3/4 left-3/4 font-bold text-white bg-pink-600 py-2 px-5 z-50">${price}/PU</button>
            </div>
            <div className="space-y-2 pt-4 uppercase">
          <div className="text-left px-4">
          <h2 className="text-2xl text-white font-bold"> {name}</h2>
          <p className='text-white'>Quantity: {rating}</p>
          <button className="relative top-3/4 left-3/4 font-bold text-white bg-pink-600 py-2 px-5 z-50">Buy Now</button>
          </div>
            <div className="border-t-2 text-gray-500 grid grid-cols-4 p-4 font-bold gap-4 border-gray-500">
<span className='text-white'>Built: {madeyear}</span>
<span className='text-white'>{brand}</span>
<span className='text-white'>{color}</span>
<span className='text-white'>{status}</span>
            </div>
            </div>
           
        </div>
       </Link>
    );
};

export default Product;