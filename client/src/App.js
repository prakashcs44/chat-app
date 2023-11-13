import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import socket from "./socket.js";
import Home from './components/Home.js';


function App() {
 
  const [name,setName] = useState("");
  const [room,setRoom] = useState("");

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
   
    {!name? (<Home setName={setName} setRoom={setRoom}/>):
    (  <Chat name = {name} room = {room}/>)}
     
    
    </div>
  );
}

export default App;
