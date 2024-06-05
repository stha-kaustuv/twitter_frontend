import React from 'react'
import LeftSidebar from './LeftSidebar';
import RSidebar from './RSidebar';
import { Outlet } from 'react-router-dom';


const Hoome = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
    <LeftSidebar/>
     <Outlet/> 
    <RSidebar/>
   
  </div>
  )
}

export default Hoome
