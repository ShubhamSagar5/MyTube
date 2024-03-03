import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBtnCategory } from '../utilis/appSlice'

const btnList = ['All','Gaming','Music','Mixes','JavaScript','DataStructures','Mantras','Live','Comedy','Dramedy','Rituals','GameShow','Java','Thoughts','News','Lectures','TouristDestination','RecentlyUploaded','Watched']


const ButtonList = () => {

  const [active,setActive] = useState('All')

  const dispatch = useDispatch()

  const btnCategoryName = useSelector((store)=>store?.app?.btnCategory)

  const handleBtnClickBgColor = (btnName) => {
    if(btnName !== active){
      setActive(btnName)
      dispatch(addBtnCategory(btnName))
    }
  }


  return (
    <div className='overflow-x-scroll flex no-scrollbar'>
      {
        btnList?.map((item,index)=>{
            return (
                <button onClick={()=>handleBtnClickBgColor(item)} className={btnCategoryName === item ? 'bg-black text-white py-1 px-3 rounded-lg my-1 mx-3' : 'bg-gray-200 py-1 px-3 rounded-lg my-1 mx-3' }>{item}</button>
            )
        })
      }  
        
    </div>
  )
}

export default ButtonList