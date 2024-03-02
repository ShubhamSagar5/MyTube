import React, { useEffect } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/ChatSlice'
import { generateRandomProfilePicUrl, randomMessageGenerator, randomNameGenerator } from '../constants/ConstantAPI'

const LiveChat = () => {
  
  const chatMess = useSelector((store)=>store?.chat?.message)
  
  const dispatch = useDispatch()

  useEffect(()=>{

    const timer = setInterval(()=>{
      dispatch(addMessage({
        profileURL:generateRandomProfilePicUrl(),
        name:randomNameGenerator(),
        message:randomMessageGenerator()
      }))
    },1000)

    return () => {
      clearInterval(timer)
    }

  },[])



  return (
    <div className=' pt-1   '>
       {
        chatMess?.map((data,index)=>{
          return (
            <Chat key={index} data={data}/>
          )
        })
       }

       
       
    </div>
  )
}

export default LiveChat