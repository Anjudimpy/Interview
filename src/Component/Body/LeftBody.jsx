import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NestedList from './LeftBodyList';

export const LeftBody = () => {
  return (
    <div className='mx-auto text-center overflow-x-auto'>
        <span className='mt-8 text-gray-600 font-bold text-3xl'>adlay</span>
        <div className='mx-auto text-center ml-16 mt-4'>
        <img src="dp.jpeg" alt="User Profile"
        className='rounded-full w-16 h-16 object-cover mb-3' />
        </div>
       <span className='font-bold text-gray-500 pr-4'>John Doe</span>
<div className='flex justify-around pr-5 mt-2 cursor-pointer'>
    <div><HomeSharpIcon sx={{color:'blue'}}/></div>
    <div><PersonIcon sx={{color:'blue'}}/></div>
    <div>< SettingsIcon  sx={{color:'blue'}}/></div>
</div>
<div>
    <NestedList/>
</div>
    </div>
  )
}
