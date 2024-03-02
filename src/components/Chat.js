import React from 'react'
import Avatar from 'react-avatar'

const Chat = ({data}) => {
  return (
    <div className='flex  mt-3 items-center '>
     <Avatar className='ml-1 mr-2 cursor-pointer' src={data?.profileURL} size="38" round={true} />
    <p className='font-semibold mx-2'>{data?.name}</p>
    <p className='mx-2'>{data?.message}</p>
    </div>
  )
}

export default Chat