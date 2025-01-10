const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000 🚀');
});

app.use(express.static(path.join(__dirname, 'public')));



io.on('connection', (socket) => {
    console.log('Conexão detectada...');

    socket.on('join-request', (username) => {
        socket.username = username;
        connectedUsers.push( username );
        console.log( connectedUsers );


        
    });
});