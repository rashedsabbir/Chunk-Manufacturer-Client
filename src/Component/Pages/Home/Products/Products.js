import React from 'react';
import useParts from '../../../hooks/useParts/useParts';
import Product from '../Product/Product';
const Products = () => {
   const {cars}=useParts()
    return (
        <div className="lg:p-10 p-5 ">
           <div className="mb-5 ">
           <h2 className="text-yellow-500 text-3xl font-bold pt-8 text-center">| Our Brand Parts</h2>
           <p className='text-white'>Best parts are available</p>
           </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    cars.map(car=><Product key={car._id} car={car}></Product>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Products;