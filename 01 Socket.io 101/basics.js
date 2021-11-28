const http = require("http")
const { Server } = require("socket.io")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("socketioClient.html", (err, data) => {
        res.end(data)
    })
})

const io = new Server(server)

io.on("connection", (socket) => {

    console.log(socket.id)
    socket.emit("welcome", "Welcome to socket.io")
    socket.on("message", data => {
        console.log(data)
    })

    /*
        socket.send uses the default event of "message" while with emit we can give event name of our choice
        socket.send({data: "THis is a demo data"}) == socket.emit("message", {data: "THis is a demo data"})
    */
   

})

server.listen(5000, () => {console.log("Listening on port 5000")})