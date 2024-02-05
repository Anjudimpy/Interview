import React from 'react';
import { Button } from 'reactstrap'; // Assuming you have imported Button from reactstrap

const TopHeader = () => {
  return (
    <div className='p-2 flex bg-slate-800'>
    <div className='flex-grow flex items-center'>
      <img src='e-logo.png' alt='Envato Logo' className='w-8 h-8 ' />
      
        <span className='text-white'>envato</span>
        <span className='text-lime-500'>market</span>
      
    </div>
    <div className='flex items-center'>
      <button className='pl-3 pr-3 bg-lime-500 text-white rounded mr-2'>Buy now</button>
    </div>
  </div>
  
  );
};

export default TopHeader;
