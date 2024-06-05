import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { TbMessagePlus } from "react-icons/tb";



const Message = () => {
  return (
    <div className='w-[70%] border- border border-gray-200'>


        <div className='flex  justify-between'>
        <div className='w-[40%]  border-r border-gray-300 '>
            <div className=' flex justify-between my-4'>
            <div>
                <h1 className='font-bold text-2xl'>Messages</h1>
            </div>
            <div className='flex items-center'>
            <IoMdSettings className='mx-2 hover:text-blue-500 cursor-pointer' size={"24px"} />
            <TbMessagePlus className='hover:text-blue-500 cursor-pointer' size={"24px"} />
            </div>

            </div>

            <div className='m-auto text-center'>
            <h1 className='font-bold text-4xl p-3'>Welcome to your inbox!</h1>
            <h2 className='text-gray-400 p-3'>Drop a line, share posts and more with private conversations between you and others on X. </h2>
            <button className='bg-blue-400 rounded-full my-4 p-5 font-bold text-white hover:bg-blue-700'>Write a message</button>
            </div>
       
        </div>



        <div className='w-[60%]   mt-[40%] mb-[50%] text-center'>
                <h1 className='font-bold text-4xl p-3'>Select a message</h1>
                <h2 className='text-gray-400 p-3'>Choose from your existing conversations, start a new one, or just keep swimming.</h2>
                <button className='bg-blue-400 rounded-full my-4 p-5 font-bold text-white hover:bg-blue-700'>New message</button>
        </div>
        
        </div>


    </div>
  )
}

export default Message
