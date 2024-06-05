import React, {useState} from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
const Bookmark = () => {
  const[isBookmark,setIsBookmark]=useState(true)
  const bookmarkHandler = () =>{
    setIsBookmark(!isBookmark);
  }
  return (
    <div className='w-[50%] border-l border-r border-gray-300'>
      
                <div className='border-b border-gray-300'>
                <h1 className='font-bold text-2xl mx-3'>Bookmarks</h1>
                <p className='text-gray-400 mx-3'>Elon Musk</p>
                </div>

                {!isBookmark && (<>
                  
                  <div className='text-center mx-3 my-4  py-2'>
                    <div className='flex items-center justify-start'>
                    <MdOutlineArrowBackIos className='hover:text-blue-600 cursor-pointer' onClick={bookmarkHandler}  size={"24px"}/>
                      <h1 className='mx-auto font-bold text-2xl'>Your Saved Bookmarks</h1>
                      </div>
                  </div>
                  
                  
                  
                  </>)}

                {isBookmark && (<>
                <div className='my-20 text-center'>
                <h1 className='font-bold text-5xl'>Save posts for later</h1>
                <p className='p-3 text-gray-400'>Bookmark posts to easily find them again in the future.</p>
                </div>
                <h1 className='font-bold text-lg cursor-pointer text-blue-400 hover:text-blue-800 text-center' onClick={bookmarkHandler}>Show Saved Bookmark</h1>
                </>)}
              
    </div>
  )
}

export default Bookmark
