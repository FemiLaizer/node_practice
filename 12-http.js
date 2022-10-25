const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("here is our about page")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for could not be found</p>
    <a href="/">Back to Home</p>
    `)
})

server.listen(5000)