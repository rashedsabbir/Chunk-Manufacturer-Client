import React from 'react';
import { Link } from 'react-router-dom';


const PartExplorer = ({car}) => {
    const {_id,name,price,pic,madeyear, description,brand, color, status, rating}=car
    return (
       <Link to={'/car/'+_id}>
            <div className="shadow-lg bg-menu1 overflow-hidden">
            <div className="w-full lg:h-56  overflow-hidden relative ">
                <img src={pic} alt="" className=" transform transition-transform hover:scale-110"/>
                <button className="absolute top-3/4 left-3/4 font-bold text-white bg-pink-600 py-2 px-5 z-50">${price}/PU</button>
            </div>
            <div className="space-y-2 pt-4 uppercase">
          <div className="text-left text-white px-4">
          <h2 className="text-2xl text-white font-bold">{name}</h2>
            <p>Available: {rating}</p>
            <p className='truncate'>{description}</p>
            <button className="relative top-3/4 left-3/4 font-bold text-white bg-pink-600 py-2 px-5 z-50">Buy Now</button>
          </div>
            <div className="border-t-2 text-white grid grid-cols-4 p-4 font-bold gap-4 border-gray-500">
<span>Build: {madeyear}</span>
<span>{brand}</span>
<span> {color}</span>
<span className='badge badge-success badge-md'>{status}</span>
            </div>
            </div>
           
        </div>
       </Link>
    );
};

export default PartExplorer;