///                                                PRACTICE 1




const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("IT IS A BACKEND CREATED BY THE NODE JS technique");
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});












// // PRACICE 2


// const http = require('http');
// const hostname = "127.0.0.1";
// const port = 1323;


// const server = http.createServer((req, res) => {
//     res.statuscode = 300;
//     res.setHeader('content-Type', 'text/html');
//     res.end('html is not there it is made only by the help of node js')
// });


// server.listen(port, hostname, () => {
//     console.log(`THE SERVER IS RUNNING AT http://${hostname}:${port}/`);
// });












// // // PRACTICE -3


// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 2233;

// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.setHeader('content-Type','text/html');
//     res.end('THIS IS A PRACTICE CODE 3');
// });

// server.listen(port,hostname,() =>{
//     console.log(`ABHISHEK'S SERVER IS RUNNING AT HTTP://${hostname}:${port}/`)
// });

