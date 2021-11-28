const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.setHeader("Content-type", "text/html")
    res.write("<h1>Hello World</h1>")
    res.end("Hello");
})

server.listen(5005, () => {console.log("Listening")})
