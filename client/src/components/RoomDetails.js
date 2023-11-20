import React, { useContext } from 'react'
import {chatContext} from "../contexts/ChatContext"

function RoomDetails() {
  const {room,members} = useContext(chatContext)
  
  return (
    <div className='room-details'>
      <p className='group-id'>Room id:{room}</p>
      <div
      
      style={{fontSize:"1.4rem",marginTop:"6px",marginLeft:"10px"}}
      
      >Joined by</div>
      <div className='room-members'>
    
      {members?.map(m=>{
        return <p>{m.name} joined at {m.time}</p>
      })}
      </div>
    </div>
  )
}

export default RoomDetails
