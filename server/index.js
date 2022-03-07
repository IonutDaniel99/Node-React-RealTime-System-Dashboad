const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;
const index = require("./server_commons/routes/index");
var cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    }
});
app.use(index);
app.use(cors());


import onSocketDisconnect from './server_commons/services/onSocketDisconnect'
import onSocketConnection from './server_commons/services/onSocketConnection'

io.on("connection", (socket) => {
    onSocketConnection(socket, io);
    socket.on("disconnect", () => {
        onSocketDisconnect(socket);
    });
});



server.listen(port, () => console.log(`Listening on port ${port}`));