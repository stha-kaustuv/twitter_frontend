import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { BsListStars } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { Link } from 'react-router-dom';






const LeftSidebar = () => {
  return (
    <div className='w-[20%]'> 
        <div>
            <Link to="/">
                <img className='ml-4' width={"40px"} src="https://www.mtctutorials.com/wp-content/uploads/2023/08/Twitter-x-logo.jpg" alt="twitter-logo"></img>
            </Link>
            <div className='my-5'>
            <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <IoHomeOutline size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Home</h1>
            </Link>
            <Link to="/explore" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <IoSearchOutline size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
           
            </Link>
            <Link to="/notification" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <IoMdNotificationsOutline size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Notification</h1>
            </Link>
            <Link to="/message" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <AiOutlineMessage size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Message</h1>
            </Link>
            <Link to="/list" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <BsListStars size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Lists</h1>
            </Link>
            <Link to="/bookmark" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full' >
                <div>
                <BsBookmarks size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Bookmark</h1>
            </Link>

            <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <CgProfile  size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </Link>

            <Link to="/login" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:text-blue-500 rounded-full'>
                <div>
                <CgLogOut  size={"25px"} />
                </div>
                <h1 className='font-bold text-lg ml-2' >Logout</h1>
            </Link>
            <button className='px-4 py-2 border-none text-md w-full rounded-full bg-blue-500 text-white hover:bg-blue-800 f0ont-bold'>Post</button>

            </div>
        </div>
    </div>
  )
}

export default LeftSidebar
