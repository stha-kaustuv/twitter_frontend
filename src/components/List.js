import React, {useState} from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdPlaylistAdd } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import Avatar from 'react-avatar';



const List = () => {
  const[isShowMore,setIsShowMore] = useState(true);
  const showMoreHandler = ()=> {
    setIsShowMore(!isShowMore);
  }
  return (
    <div className='w-[50%] border-l border-r border-gray-300'>
       {isShowMore &&(<>
       <div className='flex items-center justify-evenly'>
            
            <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                 <IoMdArrowBack size={"24px"}/>
                  </Link>
              
              <div className='p-2 bg-gray-300 rounded-full outline-none flex items-center w-[60%]'>
              <CiSearch className='cursor-pointer' size={"24px"} />
              <input type='text' className='bg-transparent outline-none px-2' placeholder='Search'/>
              </div>
              <MdPlaylistAdd className=' hover:bg-gray-100 cursor-pointer'  size={"24px"}/>
              <PiDotsThreeOutlineFill  className=' hover:bg-gray-100 cursor-pointer' size={"24px"} />
            </div>
            </>)}

      {!isShowMore &&(<>
            <div className='border-b border-gray-300 py-8'>         
             <div className='flex'>
            <Link className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
               <IoMdArrowBack onClick={showMoreHandler} size={"24px"}/>
                </Link>
                <h1 className='font-bold text-2xl mx-3'>Suggested Lists</h1>
            </div>
                  <img className='mx-6 my-4' src='https://ton.twimg.com/onboarding/channels/discovery-v2.png'/>
                  <h1 className='font-bold text-3xl mx-10'>Choose Your Lists</h1>
                  <p className='text-lg text-gray-400 mx-10'>When you follow a List, you'll be able to quickly keep up with the experts on what you care about most.</p>
            </div>

            </>)}
         

          <div>
            <h1 className='font-bold text-2xl mx-4 my-4'>Discover new lists</h1>
            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://tse1.mm.bing.net/th?id=OIP.HiaHTKqwmfyXgQf7imTD8QHaLH&pid=Api&P=0&h=220" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Aghori</h1>
                <p className=' text-sm text-gray-400'>.131k members</p>
                </div>
                <p>9k followers including @radionp</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>National</h1>
                <p className=' text-sm text-gray-400'>.12k members</p>
                </div>
                <p>9k followers including @balenshah</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://www.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Elon Musk</h1>
                <p className=' text-sm text-gray-400'>.500k members</p>
                </div>
                <p>58k followers including @Mark Zukerberg</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>
            {!isShowMore && (<>
            
            
              <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.ytimg.com/vi/ByAQdycmy1A/maxresdefault.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Tribal Rain</h1>
                <p className=' text-sm text-gray-400'>.20k members</p>
                </div>
                <p>1.5k followers including @apple</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>
            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.pinimg.com/originals/4b/58/a9/4b58a95851db679e3a8eb846e1fd32af.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>John</h1>
                <p className=' text-sm text-gray-400'>.22k members</p>
                </div>
                <p>28k followers including @flip123</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.pinimg.com/736x/a7/73/18/a77318bc257f0d62cd699671d1099dc0.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Florida</h1>
                <p className=' text-sm text-gray-400'>.24k members</p>
                </div>
                <p>1k followers including @Magic</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.ytimg.com/vi/Wd43S2h-ZpI/maxresdefault.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Kathmandu</h1>
                <p className=' text-sm text-gray-400'>.800k members</p>
                </div>
                <p>18k followers including @rabi</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.ytimg.com/vi/kKdYHwaMA_k/maxresdefault.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>Dharan</h1>
                <p className=' text-sm text-gray-400'>.100k members</p>
                </div>
                <p>4k followers including @HarkaSampang</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>

            <div className='flex items-center justify-between mx-4 my-4'>
              <div className='flex justify-start'>
              <div>
              <Avatar className='cursor-pointer' src="https://i.ytimg.com/vi/LzxfSB_gEBI/maxresdefault.jpg" size="60" round={20} />
              </div>
              <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold text-lg cursor-pointer'>React JS</h1>
                <p className=' text-sm text-gray-400'>.1M members</p>
                </div>
                <p>250k followers including @JavaScript</p>
              </div>
              </div>
              <div>
              <FaPlus className='cursor-pointer rounded-full bg-gray-300  hover:text-blue-600' size={"24px"} color='' />
              </div>
            </div>
            
            </>)}

            <div className=' cursor-pointer p-2 hover:bg-gray-300  ml-4 mr-4 my-8'>
              <h1 className='font-bold text-xl text-blue-500' onClick={showMoreHandler}>{isShowMore ? "Show More" : "Show Less"}</h1>
            </div>

            

          </div>



    </div>
  )
}

export default List
