const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000"
  }
});




const members = new Map();


io.on('connection', (socket) => {
     
     
      socket.on("disconnect",()=>{
        members.delete(socket.id);
        const membersAsObj = Object.fromEntries(members);
        io.emit("disconnected",membersAsObj)
      })
   
      socket.on("chat message",(message,room)=>{
        socket.broadcast.to(room).emit('chat message', message);
      })

      socket.on("join-room",(room,user,time)=>{
        
        const membersAsObj = Object.fromEntries(members);
        
        socket.emit("connected",membersAsObj);
        
        members.set(socket.id,{name:user,time});
      
        socket.join(room);
        
        socket.broadcast.to(room).emit('join-room',user,time);
      })
  });




  
server.listen(5000, () => {
  console.log('listening on *:5000');
});