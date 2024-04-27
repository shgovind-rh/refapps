const http = require("http");
const port = process.env.port || 5000;

const server = http.createServer(async (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({ message: "Hello World!"}));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
    }
    res.end();
})

server.listen(port, () => console.log(`Server started on port: ${port}`));