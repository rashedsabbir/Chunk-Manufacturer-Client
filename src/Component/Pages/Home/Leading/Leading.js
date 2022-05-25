import React from 'react';
import toyota from '../../../../images/logo/toyota--big.svg'
import volkswagen from '../../../../images/logo/volkswagen--big.svg'
import daimler from '../../../../images/logo/daimler--big.svg'
import ford from '../../../../images/logo/ford--big.svg'
import './Leading.css'
const Leading = () => {
    return (
        <div className='grid place-content-evenly text-white py-10'>
            <h2 className='text-3xl border bg-menu1'>Top Manufacturer</h2>
            <div class="overflow-x-auto  w-full px-auto bg-menu-name">
  <table class="table w-full border-separate border table-auto border-slate-500">
    
    <thead className=''>
      <tr>
        
        <th className=''>Name</th>
        <th className=''>Revenue</th>
        
        
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={toyota} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Toyota Motor</div>
              <div class="text-sm opacity-50">Japan</div>
            </div>
          </div>
        </td>
        <td>
        $248.6 billion
          <br/>
          <span class="badge badge-ghost badge-sm">Net Income: $14.4 billion</span>
        </td>
        
        
      </tr>
      
      <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={volkswagen} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Volkswagen AG </div>
              <div class="text-sm opacity-50">Germany</div>
            </div>
          </div>
        </td>
        <td>
        $247.4 billion
          <br/>
          <span class="badge badge-ghost badge-sm">Revenue: $247.4 billion</span>
        </td>
        
      </tr>
      
      <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={daimler} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Daimler AG</div>
              <div class="text-sm opacity-50">Germany</div>
            </div>
          </div>
        </td>
        <td>
        $174.6 billion
          <br/>
          <span class="badge badge-ghost badge-sm">Net Income: -$309.3 million</span>
        </td>
        
      </tr>
      
      <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={ford} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Ford Motor</div>
              <div class="text-sm opacity-50">Multinational</div>
            </div>
          </div>
        </td>
        <td>
        $130.4 billion
          <br/>
          <span class="badge badge-ghost badge-sm">Net Income: $1.9 billion</span>
        </td>
        
      </tr>
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default Leading;