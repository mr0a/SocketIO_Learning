const http = require("http")
const ws = require("ws")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    fs.readFile("nativeWSClient.html", (err, data) => {
        res.end(data)
    })
})

server.listen(5000, () => console.log("Listening on 5000"))

const wss = new ws.WebSocketServer({server})

// Log 101 Switching Protocol headers
wss.on("headers", (headers, req) => {
    console.log(headers)
})

wss.on("connection", (ws, req) => {
    console.log("Someone connected")
    ws.send("Welcome to Websocket! You are connected to the server!")
    ws.onmessage = event => {
        console.log(event.data)
        ws.send(`You sent: ${event.data}`)
    }
})