const http = require("http");
const host = 'localhost';
const port = 8080;

const requestlistener = function(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200); 
    res.end("hello , im Wizbrym and this is My first sever!");
};

const server = http.createServer(requestlistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
