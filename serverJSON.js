const http = require("http");
const host = 'localhost';
const port = 8080;

const requestlistener = function(req, res){
   res.setHeader("Content-Type", "application/json");
   res.writeHead(200); 
     let MyDetail = {
         lastName: "ALIMI",
         firstName: "IBRAHIM",
         job: "BackEnd Developer",
        country: "USA",
    }
     res.write(JSON.stringify(MyDetail, undefined, 4));
     res.end();
};

const server = http.createServer(requestlistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
