import React from 'react';

import useParts from '../../hooks/useParts/useParts';
import PartExplorer from './PartExplorer';
const PartExplore = () => {
    const {cars,setPage,page,pagination}=useParts()
   

    return (
        <div className="lg:p-10 p-5 ">
             <div className="mb-5 ">
           <h2 className="text-pink-600 text-3xl font-bold pt-8 text-center">| Our Brand Parts</h2>
           <p>Best manufactured parts are available</p>
           </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    cars.map(car=><PartExplorer key={car.id} car={car}></PartExplorer>)
                }
            </div>
          <div className="mt-4 flex gap-2 justify-center">
          {
               [...Array(pagination).keys()].map(number=>
                <button
                key={number}
                className={number===page?'py-2 px-4 font-bold border-2 border-blue-600 bg-blue-600 text-white':'py-2 px-4 font-bold border-2 border-blue-600 bg-white text-blue'}
                onClick={()=>setPage(number)}
                >
{number+1}
                </button>)
           }
          </div>
        </div>
    );
};

export default PartExplore;