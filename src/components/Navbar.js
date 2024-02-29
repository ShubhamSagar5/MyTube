import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5"
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from './utilis/appSlice';

const Navbar = () => {
  
  const dispatch = useDispatch()
  
  const handleSidebartoggle = () => {
    dispatch(toggleSidebar())
  }
  
  
  
  return (
    <div className='m-2 bg-white fixed w-[100vw] top-0'>
        <div className='p-2 flex  fixed top-0 justify-center items-center w-[100%] z-10 bg-white'>
            <div className=' w-[30%] mt-2'>
                  <div className='flex items-center'>
                  <div onClick={handleSidebartoggle} className='hover:bg-gray-400 p-2 rounded-full '>
                                <GiHamburgerMenu size={26} className='cursor-pointer' />
                  </div>

            <img className='h-[25px] mx-3 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="" />
            </div>
            </div>
          <div className='w-[90%]'>
 <div className='flex '>
                
                    <input type="text" placeholder='Search..' className='w-[50%] ml-[70px] border border-black rounded-l-full px-5 py-[5px] outline-none' />
                
                <button className='flex  items-center cursor-pointer bg-gray-300 border border-black px-5 rounded-r-full'><CiSearch size={24}/></button>
            </div>
          </div>
           
           <div className='w-[20%]'>
<div className='flex items-center  justify-center'>
                    <BsCameraReels size={24} className='mx-3 cursor-pointer'/>
                    <IoNotificationsOutline size={24} className='mx-3 cursor-pointer'/>
                    <Avatar className='mx-3 cursor-pointer' src="https://www.aidemos.info/wp-content/uploads/2023/05/A_boy_simple_avatar_pixar_3d_rendering_Light_backgroun_3f9635f5-175c-4740-98c5-c53cd64885f8.webp" size="45" round={true} />
            </div>
           </div>
            
        </div>
    </div>
  )
}

export default Navbar