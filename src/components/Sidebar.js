
import {SidebarItem1} from '../constants/SidebarItem'
import {SidebarItem2} from '../constants/SidebarItem'
import {SidebarItem3} from '../constants/SidebarItem'
import {SidebarItem4} from '../constants/SidebarItem'
import {SidebarItem5} from '../constants/SidebarItem'




const Sidebar = () => {
    return (
        <div className="ml-3   fixed  p-1 mt-[75px] h-[calc(100vh-4.625rem)] overflow-y-scroll bg-white">
           
           {
            SidebarItem1?.map((item,index)=>{
                return (
                    <div key={index} className="flex my-1 hover:bg-gray-300 p-2 rounded-lg">
                    {item.icon}
            <p className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem2?.map((item,index)=>{
                return (
                    <div key={index} className="flex my-1 hover:bg-gray-300 p-2 rounded-lg">
                    {item.icon}
            <p className="mx-4 ">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem3?.map((item,index)=>{
                return (
                    <div key={index} className="flex my-1 hover:bg-gray-300 p-2 rounded-lg">
                    {item.icon}
            <p className="mx-4">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>
           {
            SidebarItem4?.map((item,index)=>{
                return (
                    <div key={index} className="flex my-1 hover:bg-gray-300 p-2 rounded-lg">
                    {item.icon}
            <p className="mx-4">{item.title}</p>
            </div>
                )
            })
           }
           <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-400'/>

           {
            SidebarItem5?.map((item,index)=>{
                return (
                    <div key={index} className="flex my-1 hover:bg-gray-300 p-2 rounded-lg">
                    {item.icon}
            <p className="mx-4">{item.title}</p>
            </div>
                )
            })
           }
            
            
        </div>
    )
}


export default Sidebar