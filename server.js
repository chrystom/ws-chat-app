// plain node stuff (http needed for creating the websocket server)
const path = require('path');
const http = require('http');


// express stuff
const express = require('express');
const app = express();

// socket.io stuff
const server = http.createServer(app)
const io = require("socket.io")(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when client connects
io.on('connection', socket => {
    // when client sends msg
    socket.on('msgSent', data => {
        // tell every client to render the new msg, passed as a string in `data`
        io.emit('renderMsg', data)
    })
})


// listen on a port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})