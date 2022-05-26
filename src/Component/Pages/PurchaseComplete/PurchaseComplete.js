import React from 'react';
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import success from '../../../lottie/71203-success-animation-2.json'
const PurchaseComplete = () => {
    const defaultOptions = {
        loop: false,
        animationData: success,
      
      };
    return (
        <div className="p-10 my-10">
           <div className="mb-4">
           <Lottie
             options={defaultOptions}
             height={200}
             width={200}
            />
<h2 className="text-3xl text-green-600">Successfully <br /> Part Purchase Done</h2>
           </div>

     <Link to="/dashboard"><button className="py-2 px-4 bg-indigo-700 text-white ">Check Your Order </button></Link>
        </div>
    );
};

export default PurchaseComplete;