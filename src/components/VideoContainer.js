import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_API } from '../constants/ConstantAPI'

const VideoContainer = () => {
  
  const [videos,setVideos] = useState([])

  const getVideoList = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API+YOUTUBE_API_KEY)
    const json = await data.json()
    setVideos(json.items)
  }
  
  console.log(videos)

  useEffect(()=>{
    getVideoList()
  },[])
  
  return (
    <div className='ml-4 mt-3 grid grid-cols-4 gap-3 '>
      
      {
        videos?.map((item)=>{
          return (
            <VideoCard data={item}/>
          )
        })
      }
      
      
      
    </div>
  )
}

export default VideoContainer