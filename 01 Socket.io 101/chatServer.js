const express = require("express")
const { Server } = require("socket.io")

const app = express()

app.use(express.static(__dirname + "/public"))

const expressServer = app.listen(5000)

const io = new Server(expressServer)

io.on("connection", socket => {
    console.log(socket.id)
    socket.emit("messageFromServer", {data: "Welcome to Socket.io Server"})
    socket.on("connectionMsg", data => {
        console.log(data)
    })
    socket.on("messageToServer", data => {
        socket.emit("messageFromServer", {data: "Received by Server: "+ data.data})
    })
})