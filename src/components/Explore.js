import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


const Explore = () => {
  const[isForyou,setIsForyou]=useState(true);
  const[isNews,setIsNews]=useState(true);
  const[isSports,setIsSports]=useState(true);
  const[isEntertainment,setIsEntertainment]=useState(true);

  const foryouHandler = () => {
    setIsForyou(!isForyou)
  }



  const newsHandler = () => {
    setIsNews(!isNews) 
  }

  const sportsHandler = () => {
    setIsSports(!isSports)
  }

  const entertainmentHandler = () => {
    setIsEntertainment(!isEntertainment)
  }

  return (
    <div className='w-[50%] border-l border-r border-gray-300 '>
    <div className='flex justify-between'>
    <div className='mx-5 my-1 p-2 bg-gray-300 rounded-full outline-none flex items-center w-[80%]'>
    <CiSearch className='cursor-pointer' size={"24px"} />
    <input type='text' className='bg-transparent outline-none px-2 mx-3 w-full' placeholder='Search'/>
    </div>
    <div className='my-1 p-2'>
    <IoSettingsSharp className='cursor-pointer hover:text-blue-500' size={"24px"} />

    </div>
    </div>
    
    <div className=' my-3 border-b border-gray-300 '>
        <ul className='flex justify-evenly gap-x-4 list-none  cursor-pointer border-solid border-gray-400'>
        <li className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center' onClick={foryouHandler}>For you</li>
        <li className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center' onClick={newsHandler}>News</li>
        <li className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center' onClick={sportsHandler}>Sports</li>
        <li className='cursor-pointer px-2 py-4 w-full hover:bg-gray-300 text-center' onClick={entertainmentHandler}>Entertainment</li>
        </ul>
    </div>

    {!isForyou && (<>

<div className='p-4 border-b border-gray-300'>
  <h1 className='font-bold text-2xl text-center'>For You</h1>

  <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Movies . Trending</p>
    <h2 className='font-bold text-lg'>Inception</h2>
    <p className=' text-sm text-gray-500'>91.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in games</p>
    <h2 className='font-bold text-lg'>God of War</h2>
    <p className=' text-sm text-gray-500'>177k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Nepal</p>
    <h2 className='font-bold text-lg'>#FestiveConcert</h2>
    <p className=' text-sm text-gray-500'>1.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Music Streaming Service . Trending</p>
    <h2 className='font-bold text-lg'>Spotify</h2>
    <p className=' text-sm text-gray-500'>588k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Football</p>
    <h2 className='font-bold text-lg'>UEFA Champions League</h2>
    <p className=' text-sm text-gray-500'>2M posts</p>
  </div>
  <div>
  <BsThreeDots className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

</div>
</>)}

{!isSports && (<>

<div className='p-4 border-b border-gray-300'>
  <h1 className='font-bold text-2xl text-center'>Sports</h1>

  <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Sports . Trending</p>
    <h2 className='font-bold text-lg'>Football</h2>
    <p className=' text-sm text-gray-500'>805k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in football</p>
    <h2 className='font-bold text-lg'>Lionel Messi</h2>
    <p className=' text-sm text-gray-500'>190k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Nepal</p>
    <h2 className='font-bold text-lg'>#Pubg</h2>
    <p className=' text-sm text-gray-500'>12.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  

</div>
</>)}


    {!isEntertainment && (<>

<div className='p-4 border-b border-gray-300'>
  <h1 className='font-bold text-2xl text-center'>Entertainment</h1>

  <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Movies . Trending</p>
    <h2 className='font-bold text-lg'>Inception</h2>
    <p className=' text-sm text-gray-500'>91.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in games</p>
    <h2 className='font-bold text-lg'>God of War</h2>
    <p className=' text-sm text-gray-500'>177k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Nepal</p>
    <h2 className='font-bold text-lg'>#FestiveConcert</h2>
    <p className=' text-sm text-gray-500'>1.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Music Streaming Service . Trending</p>
    <h2 className='font-bold text-lg'>Spotify</h2>
    <p className=' text-sm text-gray-500'>588k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Football</p>
    <h2 className='font-bold text-lg'>UEFA Champions League</h2>
    <p className=' text-sm text-gray-500'>2M posts</p>
  </div>
  <div>
  <BsThreeDots className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

</div>
</>)}



{!isNews && (<>

<div className='p-4 border-b border-gray-300'>
  <h1 className='font-bold text-2xl text-center'>News</h1>

  <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Movies . Trending</p>
    <h2 className='font-bold text-lg'>Inception</h2>
    <p className=' text-sm text-gray-500'>91.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in games</p>
    <h2 className='font-bold text-lg'>God of War</h2>
    <p className=' text-sm text-gray-500'>177k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Nepal</p>
    <h2 className='font-bold text-lg'>#FestiveConcert</h2>
    <p className=' text-sm text-gray-500'>1.2k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Music Streaming Service . Trending</p>
    <h2 className='font-bold text-lg'>Spotify</h2>
    <p className=' text-sm text-gray-500'>588k posts</p>
  </div>
  <div>
  <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

  <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
  <div className='my-3'>
    <p className=' text-sm text-gray-500'>Trending in Football</p>
    <h2 className='font-bold text-lg'>UEFA Champions League</h2>
    <p className=' text-sm text-gray-500'>2M posts</p>
  </div>
  <div>
  <BsThreeDots className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
  </div>
  </div>

</div>
</>)}



    
      
    <div className='p-4'>
      <h1 className='font-bold text-2xl'>Trends for you</h1>

      <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300 '>
      <div className='my-3'>
        <p className=' text-sm text-gray-500'>Sports . Trending</p>
        <h2 className='font-bold text-lg'>Lionel Messi</h2>
        <p className=' text-sm text-gray-500'>71.2k posts</p>
      </div>
      <div>
      <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
      </div>
      </div>

      <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
      <div className='my-3'>
        <p className=' text-sm text-gray-500'>Trending in political figures</p>
        <h2 className='font-bold text-lg'>Cuba</h2>
        <p className=' text-sm text-gray-500'>177k posts</p>
      </div>
      <div>
      <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
      </div>
      </div>

      <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
      <div className='my-3'>
        <p className=' text-sm text-gray-500'>Trending in Nepal</p>
        <h2 className='font-bold text-lg'>#NepalCricket</h2>
        <p className=' text-sm text-gray-500'>71.2k posts</p>
      </div>
      <div>
      <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
      </div>
      </div>

      <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
      <div className='my-3'>
        <p className=' text-sm text-gray-500'>Music Streaming Service . Trending</p>
        <h2 className='font-bold text-lg'>Spotify</h2>
        <p className=' text-sm text-gray-500'>588k posts</p>
      </div>
      <div>
      <BsThreeDots  className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
      </div>
      </div>

      <div className='flex items-center justify-between cursor-pointer  hover:bg-gray-300'>
      <div className='my-3'>
        <p className=' text-sm text-gray-500'>Trending in Football</p>
        <h2 className='font-bold text-lg'>Lamine Yamal</h2>
        <p className=' text-sm text-gray-500'>21.2k posts</p>
      </div>
      <div>
      <BsThreeDots className=' cursor-pointer hover:border-gray-300 hover:bg-blue-200 rounded-full hover:text-blue-500' size={"24px"} />
      </div>
      </div>

    </div>
   

    



    </div>
  )
}

export default Explore