import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
const RSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div className='p-2 bg-gray-300 rounded-full outline-none flex items-center w-full'>
      <CiSearch className='cursor-pointer' size={"24px"} />
      <input type='text' className='bg-transparent outline-none px-2' placeholder='Search'/>
      </div>

      <div className='border border-gray-300 bg-gray-100 rounded-2xl px-4 my-5 py-6'>
        <div className='font-bold'>Subscribe to premium</div>
        <div className='font-semibold my-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</div>
        <div><button className='bg-blue-500 text-white font-bold rounded-full w-[40%] my-2 hover:bg-blue-800'>Subscribe</button></div>
      </div>

      <div className='border border-gray-300 bg-gray-100 rounded-2xl px-4 my-5  py-6'>
       <h1 className='font-bold text-lg my-3'>Who to Follow</h1>
        <div className='flex items-center justify-between my-4'>
          <div className='flex'>
              <div>
              <Avatar src="https://www.imnepal.com/wp-content/uploads/2019/12/SiddhiCharan-Shrestha-Image.jpg" size="50" round={true} />
              </div>

              <div className='ml-2'>
                  <h1 className='font-bold'>Shrestha</h1>
                  <p className='text-sm'>@syncstha</p>
              </div>
          </div>
          <div>
          <button className='px-4 py-1\ bg-blue-400 text-white rounded-full hover:bg-blue-800'>Profile</button>
          </div>   
        </div>
        <div className='flex items-center justify-between my-4'>
          <div className='flex'>
              <div>
              <Avatar src="https://s.abcnews.com/images/International/prince-harry-teen-04-gty-jef-171113_3x4_1600.jpg" size="50" round={true} />
              </div>

              <div className='ml-2'>
                  <h1 className='font-bold'>Harry</h1>
                  <p className='text-sm'>@anynomous</p>
              </div>
          </div>
          <div>
          <button className='px-4 py-1\ bg-blue-400 text-white rounded-full hover:bg-blue-800'>Profile</button>
          </div>   
        </div>
        <div className='flex items-center justify-between my-4'>
          <div className='flex'>
              <div>
              <Avatar src="https://wallpapercave.com/wp/wp7193519.jpg" size="50" round={true} />
              </div>

              <div className='ml-2'>
                  <h1 className='font-bold'>Bahadur</h1>
                  <p className='text-sm'>@MysticWave</p>
              </div>
          </div>
          <div>
          <button className='px-4 py-1\ bg-blue-400 text-white rounded-full hover:bg-blue-800'>Profile</button>
          </div>   
        </div>
        <div className='flex items-center justify-between my-4'>
          <div className='flex'>
              <div>
              <Avatar src="https://wallpaperaccess.com/full/3092604.jpg" size="50" round={true} />
              </div>

              <div className='ml-2'>
                  <h1 className='font-bold'>Rose</h1>
                  <p className='text-sm'>@rosesarerosie</p>
              </div>
          </div>
          <div>
          <button className='px-4 py-1\ bg-blue-400 text-white rounded-full hover:bg-blue-800'>Profile</button>
          </div>   
        </div>
        <div className='flex items-center justify-between my-4'>
          <div className='flex'>
              <div>
              <Avatar src="https://lastfm.freetls.fastly.net/i/u/ar0/5ed6117a361d1e7bd8a2df626f95b0c3.jpg" size="50" round={true} />
              </div>

              <div className='ml-2'>
                  <h1 className='font-bold'>Ava</h1>
                  <p className='text-sm'>@Lava</p>
              </div>
          </div>
          

          
          <div>
          <button className='px-4 py-1\ bg-blue-400 text-white rounded-full hover:bg-blue-800'>Profile</button>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default RSidebar
