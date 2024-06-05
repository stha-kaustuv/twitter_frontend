import React,{useState} from 'react'
import Avatar from 'react-avatar';
import { GoComment } from "react-icons/go";
import { TbLocationShare } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { MdVerified } from "react-icons/md";




const Tweet = () => {
    const[isCommentVisible,setIsCommentVisible]=useState(false);
    const[isCount,setISCount]=useState(0);
    const[isComment,setIsComment]=useState(0);
    const handleCommentClick=()=>{
        setIsCommentVisible(!isCommentVisible);
    }
    const handleLikeClick=()=>{
      setISCount(isCount+1);
    }
    const handleComment=()=>{
      setIsComment(isComment+1)
    }

  return (
    <div className='border-b border-gray-200'>
        <div className='flex p-4 border-b border-gray-300'>
             <Avatar src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg" size="50" round={true} />
             <div className='ml-1 w-full'>
             <div className='flex items-center'>
                <h1 className='font-bold'>Elon Musk</h1>
                <MdVerified className='text-blue-600' size={"20px"} />

                <p className='text-gray-500 text-sm '>@elonmusk       .1m</p>
             </div>

             <div>
                <p className='px-4 my-2'>Starship Flight 4, with many improvements, aiming to launch on Thursday!

                  The main goal of this mission is to get much deeper into the atmosphere during reentry, ideally through max heating.
                </p>
                <img className='p-4' src='https://wallpapercave.com/wp/wp4267823.png' />
             </div>

            <div className='flex justify-between my-4'>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><GoComment onClick={handleCommentClick}  size={"20px"} /></div>
                    <p className='ml-1'> {isComment}</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                 <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'> <BiRepost  size={"20px"}/></div>  
                    <p className='ml-1'>0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                   <div className='p-2 hover:bg-pink-200  rounded-full hover:text-red-700' onClick={handleLikeClick}><FaRegHeart size={"20px"} /></div> 
                    <p className='ml-1'>{isCount}</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><TbLocationShare  size={"20px"}/></div>  
                    <p className='ml-1'>0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><FaRegBookmark size={"20px"} /></div>
                    <p className='ml-1'>0</p>
                </div>
            </div>

            {isCommentVisible &&(<>
            <div className='mt-4'>
              <textarea
                className='w-full p-2 border border-gray-300 rounded-lg'
                rows='3'
                placeholder='Write your comment...'
              ></textarea>
              <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={handleComment}>Comment</button>
            </div>
            </>)}




             </div>
             
        </div>

        <div className='flex p-4'>
             <Avatar src="https://tse1.mm.bing.net/th?id=OIP.dEeqhoyQhgNCyf9VaN4g0gHaFj&pid=Api&P=0&h=220" size="50" round={true} />
             <div className='ml-1 w-full'>
             <div className='flex items-center'>
                <h1 className='font-bold'>Monkey.D.Luffy</h1>
                <p className='text-gray-500 text-sm '>Strawhat@10       .1m</p>
             </div>

             <div>
                <p className='px-4 my-2'>Gear 5 pic</p>
                <img className='p-4' src='https://cdn.dynamicwallpaper.club/wallpapers/p74wje5iej/thumbs/1200/0.jpg' />
             </div>

            <div className='flex justify-between my-4'>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><GoComment onClick={handleCommentClick}  size={"20px"} /></div>
                    <p className='ml-1'> 0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                 <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'> <BiRepost  size={"20px"}/></div>  
                    <p className='ml-1'>0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                   <div className='p-2 hover:bg-pink-200  rounded-full hover:text-red-700'><FaRegHeart size={"20px"} /></div> 
                    <p className='ml-1'>0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><TbLocationShare  size={"20px"}/></div>  
                    <p className='ml-1'>0</p>
                </div>
                <div className='cursor-pointer flex items-center px-2'>
                    <div className='p-2 hover:bg-gray-200 rounded-full hover:text-blue-700'><FaRegBookmark size={"20px"} /></div>
                    <p className='ml-1'>0</p>
                </div>
            </div>

            {isCommentVisible &&(<>
            <div className='mt-4'>
              <textarea
                className='w-full p-2 border border-gray-300 rounded-lg'
                rows='3'
                placeholder='Write your comment...'
              ></textarea>
              <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg' >Comment</button>
            </div>
            </>)}




             </div>
             
        </div>


    </div>


    

  )
}

export default Tweet
