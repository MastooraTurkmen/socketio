const express = require('express');
const app = express()
const socketIO = require('socket.io');

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(8000)
const io = socketIO(expressServer)


io.on('connection', (socket) => {
    console.log('New client connected', socket.id)
    socket.emit('message from server', {
        data: "Welcome to the WebSocket server!"
    })
})


// http://localhost:8000

console.log('Server is running on http://localhost:8000')