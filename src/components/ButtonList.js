import React, { useState } from 'react'

const btnList = ['All','Gaming','Music','Mixes','JavaScript','DataStructures','Mantras','Live','Comedy','Dramedy','Rituals','GameShow','Java','Thoughts','News','Lectures','TouristDestination','RecentlyUploaded','Watched']


const ButtonList = () => {

  const [active,setActive] = useState('All')

  const handleBtnClickBgColor = (btnName) => {
    if(btnName !== active){
      setActive(btnName)
    }
  }
  console.log(active)

  return (
    <div className='overflow-x-scroll flex no-scrollbar'>
      {
        btnList?.map((item,index)=>{
            return (
                <button onClick={()=>handleBtnClickBgColor(item)} className={ active === item ? 'bg-black text-white py-1 px-3 rounded-lg my-1 mx-3' :'bg-gray-200 py-1 px-3 rounded-lg my-1 mx-3'}>{item}</button>
            )
        })
      }  
        
    </div>
  )
}

export default ButtonList