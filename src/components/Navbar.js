import React, { useEffect, useState } from 'react'
import { TbMenu2 } from "react-icons/tb";

import { CiSearch } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5"
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { addSuggestionList, toggleSidebar } from '../utilis/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { SUGGESTION_API } from '../constants/ConstantAPI';
import darkLogo from '../utilis/Image/yt_logo_rgb_light.png'
import lightLogo from '../utilis/Image/yt_logo_rgb_dark.png'



const Navbar = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const suggestionList = useSelector((store)=>store?.app?.suggestionList)

  const [searchText,setSearchText] = useState('')

  const lightMode = useSelector((store)=>store?.app?.lightMode)
  

  const handleSidebartoggle = () => {
    dispatch(toggleSidebar())
  }
  
  const handleLOGONavigate = () => {
    navigate('/')
  }

  const handleSuggestionAutoComplete = async() => {
      const data = await fetch(SUGGESTION_API+searchText)
      const json = await data.json()
      dispatch(addSuggestionList(json[1]))
  }

 const handleSearchBtnCLick = (searchText) => {
  if(searchText){
    navigate('/search/'+searchText)
    setSearchText('')
    dispatch(addSuggestionList(null))
  }
  
 }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      handleSuggestionAutoComplete()
    },[200])


    return () => {
      clearTimeout(timer)
    }

   
   
  },[searchText])
  
  return (
    <div className=' md:m-2  fixed w-[100vw] top-0'>
        <div className={`${lightMode ? 'bg-white':'bg-black'} p-2 flex  fixed top-0 justify-center items-center w-[100%] z-10 `}>
            <div className=' w-[30%] mt-2'>
                  <div className='flex items-center'>
                  <div onClick={handleSidebartoggle} className='hover:bg-[#343232] p-2 rounded-full '>
                                <TbMenu2 size={26} className={`${lightMode ? 'text-black':'text-white'}`}/>
                  </div>

            <img onClick={handleLOGONavigate} className=' h-[25px]  md:h-[25px] mx-2 md:mx-3 cursor-pointer' src={lightMode ? darkLogo : lightLogo} alt="youtubelogo" />
            </div>
            </div>
          <div className='md:w-[90%] w-[70%] '>
 <div className='flex'>
                
                    <input type="text" placeholder='Search..' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className={`w-[50%] ml-[55px] md:ml-[70px] font-semibold border border-[#343232] ${lightMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-l-full px-5 py-[5px] outline-none`} />
                
                <button onClick={()=>handleSearchBtnCLick(searchText)} className={`flex  items-center cursor-pointer ${lightMode? 'bg-[#737070]':'bg-[#343232] text-white'} border border-[#343232] md:px-5 px-2 rounded-r-full`}><CiSearch size={24}/></button>
            
            </div>
           {
            (searchText && suggestionList) &&  <div className={`absolute z-50 ${lightMode ? 'bg-[white] text-black':' bg-[#343232] text-white '}  rounded-lg md:w-[31%] mt-2 ml-[6px] md:ml-[80px]`}>
              <ul className='p-3'>
              {
                suggestionList?.map((listItem,index)=>{
                  return (
                   <li key={index} onClick={()=>handleSearchBtnCLick(listItem)} className={`flex font-semibold py-2 px-1 rounded-lg cursor-pointer items-center ${lightMode ? 'hover:bg-gray-200':'hover:bg-[#cdbbbb22]'}`}><CiSearch size={24}/><span className='mx-3 '>{listItem}</span></li>

                  )
                })
              }
                

              </ul>
            </div>
           }
           
          </div>
           
           <div className='md:w-[30%] '>
<div className={`flex items-center  justify-center ${lightMode ? 'text-black':'text-white' }`}>
                    <BsCameraReels size={24} className='mx-3 cursor-pointer'/>
                    <IoNotificationsOutline size={24} className='md:mx-3 cursor-pointer'/>
                    <Avatar className='md:mx-3 cursor-pointer' src="https://www.aidemos.info/wp-content/uploads/2023/05/A_boy_simple_avatar_pixar_3d_rendering_Light_backgroun_3f9635f5-175c-4740-98c5-c53cd64885f8.webp" size="45" round={true} />
            </div>
           </div>
            
        </div>
    </div>
  )
}

export default Navbar