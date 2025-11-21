// Socket IO basics
const http = require('http')
const express = require('express')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected')

    // Listen for messages from the client
    socket.on('message', (msg) => {
        console.log('Message received:', msg)

        // Broadcast the message to all connected clients
        io.emit('message', msg)
    })

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

// Start the server
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

// http://localhost:8000
console.log('Server is running on http://localhost:8000')