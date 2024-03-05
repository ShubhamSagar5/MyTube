import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBtnCategory } from '../utilis/appSlice'

const btnList = ['All','Gaming','Music','Mixes','JavaScript','DataStructures','Mantras','Live','Comedy','Dramedy','Rituals','GameShow','Java','Thoughts','News','Lectures','TouristDestination','RecentlyUploaded','Watched']


const ButtonList = () => {

  const lightMode = useSelector((store)=>store?.app?.lightMode)

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
                <button key={index} onClick={()=>handleBtnClickBgColor(item)} className={btnCategoryName === item ? 'bg-[#454444] text-white font-semibold py-1 px-3 rounded-lg my-1 mx-3' : 'bg-gray-100 py-1 px-3 font-semibold rounded-lg my-1 mx-3' }>{item}</button>
            )
        })
      }  
        
    </div>
  )
}

export default ButtonList