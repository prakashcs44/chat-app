import React, { useContext} from 'react'
import socket from '../socket'
import { chatContext } from '../contexts/ChatContext'
import currentTime from "../Time"
function Home() {

   const {setRoom,setUsername}  = useContext(chatContext);
   
    let name = ""
    let tempRoom = ""
    const joinRoom = ()=>{
      
       setUsername(name)
       socket.emit("join-room",tempRoom,name,currentTime());
       setRoom(tempRoom)
      
    }

   

  return (
    <div className='home-container'>
     <input placeholder='Enter your name'
     className='input-name'
     onChange={(ev)=>{
      
      name = ev.target.value
     }}
     
     />
      <input placeholder='Enter room'
     className='input-room'
     onChange={(ev)=>{
     tempRoom = (ev.target.value)
     }}
     />
     <button onClick={()=>joinRoom()} className='join-btn'>Join</button>
    
    
    </div>
  )
}

export default Home
