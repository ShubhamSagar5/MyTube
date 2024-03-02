import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_API } from '../constants/ConstantAPI'
import { Link } from 'react-router-dom'

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
    <div className='ml-4 mt-3 grid md:grid-cols-4 gap-5  '>
      
      {
        videos?.map((item)=>{
         console.log(item)
          return (
          <Link to={`/watch?v=${item.id}`} key={item.id}><VideoCard data={item}/></Link>  
          )
        })
      }
      
      
      
    </div>
  )
}

export default VideoContainer