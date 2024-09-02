// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const { ExpressPeerServer } = require('peer');
require('dotenv').config();

// Initialize the app and server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Setup PeerJS Server
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
app.use('/peerjs', peerServer);

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Handle joining a room/channel
  socket.on('joinRoom', ({ room }) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  // Handle sending a message
  socket.on('chatMessage', (data) => {
    io.to(data.room).emit('chatMessage', data);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
