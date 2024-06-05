import React from 'react'
import Avatar from 'react-avatar'
import { IoIosSettings } from "react-icons/io";
import { FaRegFileImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";




const CreatePost = () => {
  return (
    <div className='w-[100%]'>
        <div>
        <div className='flex items-start justify-between border-b border-gray-200 sticky top-0'>
            <div className='cursor-pointer w-full hover:bg-gray-200 text-center px-4 py-3'>
                <h1 className=' font-semibold text-gray-700 text-lg'>For You</h1>
            </div>

            <div className='cursor-pointer w-full hover:bg-gray-200 text-center px-4 py-3'>
            <h1 className=' font-semibold text-gray-700 text-lg'>Following</h1>
            </div>

            <div className='cursor-pointer w-[20%] hover:bg-gray-200  px-4 py-3 align-baseline '>
            <IoIosSettings className='hover:text-blue-700' size={"25px"}/>
            </div>
        </div>
        <div>
            <div className='flex items-center p-4'>
                <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg" size="50" round={true} />
                    </div>
                <input className='w-full outline-none border-none text-lg ml-2' type='text' placeholder='What is happening?!'/>
            </div>
            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div className='flex items-center justify-evenly ml-4 px-3  w-[50%] cursor-pointer'>
                        <div className='p-2 hover:bg-gray-300 rounded-full hover:text-blue-700'>
                        <FaRegFileImage size={"18px"}/>
                        </div>
                        <div className='p-2 hover:bg-gray-300 rounded-full hover:text-blue-700'>
                        <MdOutlineGifBox  size={"18px"}/>
                        </div>
                        <div className='p-2 hover:bg-gray-300 rounded-full hover:text-blue-700'>
                        <BiPoll size={"18px"}/>
                        </div>
                        <div className='p-2 hover:bg-gray-300 rounded-full hover:text-blue-700'>
                        <MdOutlineEmojiEmotions size={"18px"}/>
                        </div>
            </div>
                <button className='px-4 py-1 border-none text-md  rounded-full bg-blue-500 text-white font-bold hover:bg-blue-800'>Post</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CreatePost
