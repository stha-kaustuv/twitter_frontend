import React from 'react'
import { IoMdSettings } from "react-icons/io";
const Notification = () => {
  return (
    <div className='w-[50%] border border-gray-300'>
      <div className='border-b border-gray-300'>
       <div className=' flex justify-between my-3 '>
            <div>
                <h1 className='font-bold text-2xl mx-3'>Notifications</h1>
            </div>
            <div className='flex items-center'>
            <IoMdSettings className='mx-3 hover:text-blue-500 cursor-pointer' size={"24px"} />
            </div>
           </div>
           <div className='flex items-center justify-evenly border-solid border-gray-400'>
            <h1 className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center'>All</h1>
            <h1 className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center'>Verified</h1>
            <h1 className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center'>Mentions</h1>
           </div>
            </div>
            <div className='mx-60 my-10 '>
              <h1 className='font-bold text-4xl m-4'>Nothing to see here — yet</h1> 
              <p className='text-gray-400 m-4'>When someone mentions you, you’ll find it here.</p>
            </div>
            
    </div>
  )
}

export default Notification
