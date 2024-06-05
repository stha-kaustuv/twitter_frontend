import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { SlCalender } from "react-icons/sl";



const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                <MdOutlineArrowBackIos size={"24px"}/>
                </Link>
                <div className='ml-2'>
                <h1 className='font-bold text-lg'>Elon Musk</h1>
                <p className='text-gray-500 text-sm'>1k posts</p>
                </div>
            </div>
           <div className='w-full h-202 border border-gray-200'>
            <img className='w-full cursor-pointer' src='https://pbs.twimg.com/profile_banners/44196397/1690621312/1500x500' alt='banner'/>
            </div>
            <div className='absolute top-60 border-4 border-white rounded-full ml-5 cursor-pointer'>
            <Avatar src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg" size="120" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 rounded-full  border border-gray-400 hover:bg-blue-700 hover:text-white '>Edit Profile</button>
            </div>
            <div className='mx-4'>
                <h1 className='font-bold text-2xl'>Elon Musk</h1>
                <p className='text-gray-400'>
                    @elonmusk
                </p>
                <div className='flex items-center mt-3'>
                <SlCalender className='text-gray-400 hover:cursor-pointer' size={"13px"} />
                <p className='text-gray-400 ml-2'>Joined June 2009.</p>
                </div>
            </div>

            <div className='flex items-center justify-start gap-x-4 ml-4'>
                <div className='flex items-center  hover: cursor-pointer'>
                <h1 className='font-bold text-xl'>609</h1>
                <p className='text-sm text-gray-400  '>following</p> 
                </div>

                <div className='flex items-center'>
                <h1 className='font-bold text-xl'>185.6M</h1>
                <p className='text-sm text-gray-400'>followers</p> 
                </div>

                <div className='flex items-center'>
                <h1 className='font-bold text-xl'>145</h1>
                <p className='text-sm text-gray-400'>subscriptions</p> 
                </div>
                </div>
            <div className='m-4 text-sm'>
                <p>
                Not followed by anyone you’re following 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Profile
