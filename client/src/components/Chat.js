import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import socket from '../socket'
import currentTime from "../Time"

function Chat({name,room}) {

const [messageList,setMessageList] = useState([])


const [message,setMessage]  = useState({});


const chatViewRef = useRef();



useEffect(()=>{
  
socket.on("chat message",(msg)=>{
setMessageList(prevMessageList => [...prevMessageList, msg]);
});

return ()=>{
  socket.off("chat message");
}
});


useEffect(()=>{

if(chatViewRef.current){
  chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
}

},[messageList])




const sendMessage = () => {
  if(message&&message.message){
  socket.emit('chat message', message,room);
  const msg = message;
  msg.name = "you"
  setMessageList(prevMessageList => [...prevMessageList, msg]);
  setMessage(undefined);
  
  }
 
};








  return (
    <div className='chat-container'>
    
 <div className='chat-view'
 
   ref={chatViewRef}
 
 >
   {messageList.map((message)=>{
      return <Message message={message.message} time = {message.time}
      
      name = {message.name}
      />
   })}
 </div>

     <input placeholder='Message...' className='chat'
     
     onChange={(ev)=>{
      setMessage({message:ev.target.value,time:currentTime(),name})
     }}

     value={message?message.message:""}
     
     />
     <button className='send-btn'
     onClick={()=>{
      sendMessage()
     }}
     >Send</button>
    </div>
  )
}

export default Chat
