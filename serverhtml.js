const http = require("http");
const host = 'localhost';
const port = 8080;

const requestlistener = function(req, res){ 
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html>
    <title>MY WEBSITE</title>
    <style>
    .content{
        background-color:gray;
    }
    </style>
    <body>
    <div class="content">
    <h1>HELLO ZURI TEAM (HTML)</h1>
    <p>HI EVERYBODY,WE LOVE YOU ALL</p>
    </div>
    </body>
    </html>`);
};

const server = http.createServer(requestlistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
