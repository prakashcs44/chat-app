import React, { useContext, useEffect, useRef} from 'react'
import Message from './Message'
import socket from '../socket'
import currentTime from "../Time"
import {chatContext} from "../contexts/ChatContext"

function Chat() {


const {messageList,setMessageList,message,setMessage,
  room,
  username,
} = 
useContext(chatContext);



const chatViewRef = useRef();



useEffect(()=>{
socket.on('chat message',(msg)=>{
setMessageList(prevMessageList => [...prevMessageList, msg]);

});

return ()=>{
  socket.off('chat message');
}




},[]);


useEffect(()=>{

if(chatViewRef.current){
  chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
}

},[messageList])


// useEffect(()=>{
//   console.log(messageList);
// },[messageList])


const sendMessage = () => {
  if(message&&message.message){
  socket.emit('chat message', message,room);
  const msg = message;
  msg.username = "you" 
  
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
      
      name = {message.username}
      />
   })}
 </div> 

     <input placeholder='Message...' className='chat'
     
     onChange={(ev)=>{
      setMessage({message:ev.target.value,time:currentTime(),username})
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

export default Chat;
