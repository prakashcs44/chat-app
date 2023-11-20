import React, { useContext, useEffect, useRef, useState} from 'react'
import Message from './Message'
import socket from '../socket'
import currentTime from "../Time"
import {chatContext} from "../contexts/ChatContext"
import Writing from './Writing'

function Chat() {

const [writer,setWriter] = useState("");
const [writing,setWriting]  = useState(false);


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
  socket.on("someone-writing",(user)=>{
    setWriter(user);
    setWriting(true);
    setTimeout(()=>{
      setWriting(false)
    },2000)
   
  
   
})

return ()=>{
  socket.off("someone-writing")
  setWriting(false);
}

},[]);




useEffect(()=>{

if(chatViewRef.current){
  chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
}

},[messageList,writing])


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





const writingMessage = (ev)=>{

  socket.emit("user-writting",username,room);
  
  setMessage({message:ev.target.value,time:currentTime(),username})
}




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
   {writing?<Writing writer = {writer}/>:(<></>)}
 </div> 

     <input placeholder='Message...' className='chat'
     
     onChange={(ev)=>{
       writingMessage(ev);
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
