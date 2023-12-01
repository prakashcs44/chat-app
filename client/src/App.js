import React, {  useContext, useEffect, useState } from 'react';
import './App.css';
import socket from "./socket.js";
import Home from './pages/Home.js';
import Room from './pages/Room.js';
import { chatContext } from './contexts/ChatContext.js';
import currentTime from './Time.js';


function App() {
 
  const {username,setMembers,members} =  useContext(chatContext)
 
 


  useEffect(()=>{

   socket.on("connected",(data)=>{

    
  

    
     for(const key in data){
        const user = data[key];
        setMembers((prevMembers => [...prevMembers,{name:user.name,time:user.time}]))
     }
     
     setMembers((prevMembers => [...prevMembers,{name:"you",time:currentTime()}]))
      
      
   });

   socket.on("disconnected", name => {
    setMembers(prevMembers => {
      const updatedMembers = prevMembers.filter(m => m.name !== name);
      console.log(updatedMembers); 
      return updatedMembers;
    });
  });
  
   
   

    socket.on("join-room",(user,time)=>{
      
      const newUser = {name:user,time};
      setMembers(prevMembers => [...prevMembers,newUser])
    })


   return ()=>{
    socket.off("connected")
    socket.off("join-room");
    socket.off("disconnected");
    
   }

  },[])



  useEffect(() => {
    const connectSocket =  () => {
      try {
        socket.connect();
        console.log("Socket connected:", socket.id);
      } catch (error) {
        console.error("Error connecting socket:", error);
      }
    };
  
    connectSocket();

    return () => {
      socket.disconnect();
      console.log("Socket disconnected");
    };
  }, []);





  return (
    
      <div className="App">
        {username ? <Room/> : <Home/>}
      </div>
   
  );
  
}

export default App;
