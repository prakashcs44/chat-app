import React, {  useContext, useEffect, useState } from 'react';
import './App.css';
import socket from "./socket.js";
import Home from './pages/Home.js';
import Room from './pages/Room.js';
import { chatContext } from './contexts/ChatContext.js';
import currentTime from './Time.js';


function App() {
 
  const {username,setMembers} =  useContext(chatContext)
 
 


  useEffect(()=>{

   socket.on("connected",(data)=>{

    
    const members = []

    
     for(const key in data){
      
       const user = data[key];
        members.push({name:user.name,time:user.time});
     }
     
      members.push({name:"you",time:currentTime()});
      setMembers(members);
   });

   socket.on("disconnected",data=>{
    const members = []
    for(const key in data){
      
      const user = data[key];
       members.push({name:user.name,time:user.time});
    }
    setMembers(members);
   })
   
   

    socket.on("join-room",(user,time)=>{
      
      const newUser = {name:user,time};
      console.log(newUser)
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
