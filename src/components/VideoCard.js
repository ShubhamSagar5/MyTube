import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { YOUTUBE_API_KEY, formatNumber,getTimeSince } from '../constants/ConstantAPI'
import useChannelThumbNail from '../utilis/useChannelTumbnail';



const VideoCard = ({data}) => {
  
    const [ytIcon, setYtIcon] = useState("");

    const channelId = data?.snippet?.channelId

    const getChannelProfile = useChannelThumbNail(channelId)


    // const getChannelProfile = async() => {
    //     const item = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data?.snippet?.channelId}&key=`+YOUTUBE_API_KEY)
    //     const json = await item?.json()
    //     setYtIcon(json?.items[0]?.snippet?.thumbnails?.high?.url);
    //     // console.log(json)
    // }

// console.log(data)

    // useEffect(()=>{
       
    //     getChannelProfile()
    
    // },[])

    console.log(getChannelProfile)

    return (
    <div className='mt-3'>
        <div>
            <img className='rounded-lg' src={data?.snippet?.thumbnails?.medium?.url} alt="" />
        </div>
        <div className='mt-2 flex'>
            <div>
            <Avatar className=' cursor-pointer' src={getChannelProfile} size="38" round={true} />

            </div>
            <div className='ml-2'>
                <p className='font-semibold '>{data?.snippet?.title}</p>
                <p className='text-sm '>{data?.snippet?.channelTitle}</p>
                <p className='text-sm'>{formatNumber(data?.statistics?.viewCount)} views : <span>{getTimeSince(data?.snippet?.publishedAt)}</span></p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard




