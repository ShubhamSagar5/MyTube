
import { useNavigate } from 'react-router-dom'
import {SidebarItem1} from '../constants/SidebarItem'
import {SidebarItem2} from '../constants/SidebarItem'
import {SidebarItem3} from '../constants/SidebarItem'
import {SidebarItem4} from '../constants/SidebarItem'
import {SidebarItem5} from '../constants/SidebarItem'
import { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { setLigthMode } from '../utilis/appSlice'




const Sidebar = () => {
    
    const navigate = useNavigate()


    const lightMode = useSelector((store)=>store?.app?.lightMode)

    const dispatch = useDispatch()

    const handleFistItem = (title) => {
        if(title === 'Home'){
            navigate('/')

        }else{
            navigate('/search/'+title)
        }


       
    }

    const handleFeedbackbtn = (title) => {
        if(title === 'Report History' || title === 'Help' || title === 'Send feedback'){
            window.open('https://www.linkedin.com/in/shubham-sagar-983a35210')
        }
    }

    const handleLightMode = () =>{
        dispatch(setLigthMode())
    }
    
    
    
    return (
        <div className={`ml-3 fixed  p-1 mt-[69px] md:mt-[75px] h-[calc(100vh-4.625rem)] overflow-y-scroll ${lightMode ? 'bg-white text-black':'bg-black text-white' } `}>
            
            {/* <div onClick={handleLightMode} className={`flex my-1  ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'} p-2 rounded-lg cursor-pointer`}>
                   {lightMode ? <MdDarkMode size={22}/>:<MdOutlineLightMode size={22}/>  }
            <p  className="mx-4 ">{lightMode ? 'Dark Mode':'Light Mode' }</p>
            </div> */}

            <div
      className={`w-16 border border-black ml-3 mb-2 py-[1px] h-7 relative rounded-full cursor-pointer ${lightMode ? 'bg-black' : 'bg-[#343434]'}`}
      onClick={handleLightMode}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${lightMode ? '' : 'translate-x-[35px]'}`}
      ></div>
    </div>



           {
            SidebarItem1?.map((item,index)=>{
                return (
                    <div  key={index} onClick={()=>handleFistItem(item.title)}  className={`flex my-1 ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'}   p-2 rounded-lg cursor-pointer`}>
                    {item.icon}
            <p  className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem2?.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>handleFistItem(item.title)} className={`flex my-1 cursor-pointer ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'} p-2 rounded-lg`}>
                    {item.icon}
            <p  className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem3?.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>handleFistItem(item.title)}   className={`flex my-1 cursor-pointer ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'} p-2 rounded-lg`}>
                    {item.icon}
            <p className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem4?.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>handleFistItem(item.title)}  className={`flex my-1 cursor-pointer ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'} p-2 rounded-lg`}>
                    {item.icon}
            <p  className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>

           {
            SidebarItem5?.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>handleFeedbackbtn(item.title)}  className={`flex my-1 cursor-pointer ${lightMode ? 'hover:bg-gray-300':'hover:bg-[#343434]'} p-2 rounded-lg`}>
                    {item.icon}
            <p className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
            
            
        </div>
    )
}


export default Sidebar