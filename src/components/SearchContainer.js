import React, { useEffect } from 'react'
import { formatNumber, generateFiveDigitNumber, generateRandomProfilePicUrl, getTimeSince } from '../constants/ConstantAPI'
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from '../constants/ConstantAPI'
import { addSearchContainerVideo } from '../utilis/appSlice'

const SearchContainer = () => {
  
   const sideBarOpen = useSelector((store)=>store?.app?.sidebarOpen)
  
   const videos = useSelector((store)=>store?.app?.searchContainerVideo)

   const dispatch = useDispatch()
   const {searchQuery} = useParams()
   console.log(searchQuery)




const getVideoByQuery = async(query) => { 
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${YOUTUBE_API_KEY}`)
    const json = await data.json()
    console.log(json?.items)
    dispatch(addSearchContainerVideo(json?.items))

}

useEffect(()=>{
    getVideoByQuery(searchQuery)
},[searchQuery])

    return (
    <div className='mt-[90px] h-[calc(100vh-4.625rem)]'>
    
    <div className={sideBarOpen?'ml-[78px]':'ml-[290px]'}>
    <p className='font-semibold text-2xl mb-3'>Search For : {searchQuery}</p>
   
   {
    videos?.map((items)=>{
        return (
          <Link to={`/watch?v=${items?.id?.videoId}`} key={items?.id?.videoId}><div key={items?.id?.videoId} className='flex mb-5'>
         <div>
            <img className='rounded-lg' src={items?.snippet?.thumbnails?.medium?.url
} alt="" />
        </div>
        <div className='mx-3 w-[400px]'>
            <div>
            <p className='font-semibold text-xl'>{items?.snippet?.title}
                </p>
                <p className='text-sm my-1 font-semibold'>{formatNumber(generateFiveDigitNumber() )} views : <span>{getTimeSince(items?.snippet?.publishedAt)}</span></p>

            </div>
            <div className=' flex items-center'>
            <Avatar className=' cursor-pointer ' src={generateRandomProfilePicUrl()} size="38" round={true} />

                <p className='text-sm mx-2 font-semibold'>{items?.snippet?.channelTitle}</p>
            </div>
        </div>
    </div></Link>  
        )
    })
   }
   
   

   
    </div>
    </div>
  )
}

export default SearchContainer