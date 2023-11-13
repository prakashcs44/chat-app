import React from 'react'
import socket from '../socket'
function Home({setName,setRoom}) {

    let name = ""
    let room  = ""
    
    const joinRoom = ()=>{
        setName(name)
        setRoom(room)
        socket.emit("join-room",room);
    }

  return (
    <div className='home-container'>
     <input placeholder='Enter your name'
     className='input-name'
     onChange={(ev)=>{
      name = ev.target.value
     }}
     
     />
      <input placeholder='enter room'
     className='input-room'
     onChange={(ev)=>{
      room = ev.target.value
     }}
     />
     <button onClick={()=>joinRoom()} className='join-btn'>join</button>
    
    
    </div>
  )
}

export default Home
