import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Body = () => {
  
    const sidebarOpen = useSelector((store)=>store?.app?.sidebarOpen)

    
    return (
        <div className=" no-scrollbar">
        <Navbar/>
        <div className=' flex w-[100%]'>
         {
           sidebarOpen && <div className='md:w-[14%] w-[10%]'>  <Sidebar/>
         </div>
           }
       
         <div className={sidebarOpen ? 'w-[86%]' : 'w-[100%]'}>
           <Outlet/>
         </div>
   
         
        </div>
       </div>
  )
}

export default Body