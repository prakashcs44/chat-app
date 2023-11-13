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






io.on('connection', (socket) => {
      socket.on("chat message",(message,room)=>{
        
        socket.broadcast.to(room).emit('chat message', message);
      })

      socket.on("join-room",(room)=>{
        socket.join(room);
      })
  });




  
server.listen(5000, () => {
  console.log('listening on *:5000');
});