import React from 'react'

function Message({message,time,name}) {
  return (
    <div className='message-container'>
        <p className='username'>{name}</p>
        <p className='message'>{message}</p>
        <p className='time'>{time}</p>
      
    </div>
  )
}

export default Message
