import React from 'react'

const btnList = ['All','Gaming','Music','Mixes','JavaScript','DataStructures','Mantras','Live','Comedy','Dramedy','Rituals','GameShow','Java','Thoughts','News','Lectures','TouristDestination','RecentlyUploaded','Watched']


const ButtonList = () => {
  return (
    <div className='overflow-x-scroll flex no-scrollbar'>
      {
        btnList?.map((item,index)=>{
            return (
                <button className='bg-gray-200 py-1 px-3 rounded-lg my-1 mx-3'>{item}</button>
            )
        })
      }  
        
    </div>
  )
}

export default ButtonList