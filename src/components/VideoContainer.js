import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_API } from '../constants/ConstantAPI'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addMainVideo, removeMainVideo } from '../utilis/appSlice'
import { computeHeadingLevel } from '@testing-library/react'
import ShimmerUI from './ShimmerUI'

const VideoContainer = () => {
  

  const {mainVideo,btnCategory} = useSelector((store)=>store?.app) 

 

  const dispatch = useDispatch()

  const getVideoList = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API+YOUTUBE_API_KEY)
    const json = await data.json()
    dispatch(addMainVideo(json?.items))
  }

  const getVideosByBtnCategory = async (Category) => {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${Category}&type=video&key=${YOUTUBE_API_KEY}`)
    const json = await data.json()
    dispatch(addMainVideo(json?.items))
  }
  

  useEffect(()=>{
    
    if(btnCategory == 'All'){
      getVideoList()
    }else{
      getVideosByBtnCategory(btnCategory)
    }
    
  },[btnCategory])
  
  return mainVideo?.length == 0 ? <ShimmerUI/> :  (
    <div className=' md:ml-4 mt-3 grid md:grid-cols-4 gap-5  '>

        {
        mainVideo?.map((item)=>{
          return (
          <Link to={`/watch?v=${typeof item?.id === 'object' ? item?.id?.videoId : item?.id}`} key={typeof item?.id === 'object' ? item?.id?.videoId : item?.id}><VideoCard data={item}/></Link>  
          )
        })
      }
        
      
      
      
      
      
    </div>
  )
}

export default VideoContainer