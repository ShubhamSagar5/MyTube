import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Feed = () => {
  return (
    <div className='mt-[75px]  h-[calc(100vh-4.625rem)] overflow-y-scroll no-scrollbar'>
        <div className='m-2'>
        <ButtonList/>
        <VideoContainer/>
     
        </div>
    </div>
  )
}

export default Feed