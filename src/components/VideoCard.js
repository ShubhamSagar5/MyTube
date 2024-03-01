import React from 'react'
import Avatar from 'react-avatar'

const VideoCard = ({data}) => {
  
    return (
    <div className='mt-3'>
        <div>
            <img className='rounded-lg' src={data?.snippet?.thumbnails?.medium?.url} alt="" />
        </div>
        <div className='mt-2 flex'>
            <div>
            <Avatar className=' cursor-pointer' src="https://www.aidemos.info/wp-content/uploads/2023/05/A_boy_simple_avatar_pixar_3d_rendering_Light_backgroun_3f9635f5-175c-4740-98c5-c53cd64885f8.webp" size="38" round={true} />

            </div>
            <div className='ml-2'>
                <p className='font-semibold '>{data?.snippet?.title}</p>
                <p className='text-sm'>{data?.snippet?.channelTitle}</p>
                <p>{data?.statistics?.viewCount}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard


const formatCash = Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format();

  console.log(formatCash(data?.statistics?.viewCount))