import React from 'react'

function Message({message,time,name}) {


  let messagepos = name === 'you'?"message-container-user":"message-container-other";

 

  return (
    <div className= {messagepos}>
        <p className='username'>{name}</p> 
        <p className='message'>{message}</p>
        <p className='time'>{time}</p>
      
    </div>
  )
}

export default Message
