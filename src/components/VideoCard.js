import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { YOUTUBE_API_KEY, formatNumber,generateFiveDigitNumber,getTimeSince } from '../constants/ConstantAPI'
import useChannelThumbNail from '../utilis/useChannelTumbnail';
import { useSelector } from 'react-redux';



const VideoCard = ({data}) => {
  
    const [ytIcon, setYtIcon] = useState("");

    const channelId = data?.snippet?.channelId

    const getChannelProfile = useChannelThumbNail(channelId)

    const lightMode = useSelector((store)=>store?.app?.lightMode)

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


    return (
    <div className='mt-3'>
        <div>
            <img className='rounded-lg w-full' src={data?.snippet?.thumbnails?.medium?.url} alt="" />
        </div>
        <div className='mt-2 flex'>
            <div>
            <Avatar className=' cursor-pointer' src={getChannelProfile} size="38" round={true} />

            </div>
            <div className={`${lightMode ? 'text-black':'text-white'}  'ml-2'`}>
                <p className='font-bold '>{data?.snippet?.title}</p>
                <p className='text-sm font-semibold '>{data?.snippet?.channelTitle}</p>
                <p className='text-sm font-semibold'>{formatNumber(data?.statistics?.viewCount ? data?.statistics?.viewCount : generateFiveDigitNumber() )} views : <span>{getTimeSince(data?.snippet?.publishedAt)}</span></p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard




// generateFiveDigitNumber