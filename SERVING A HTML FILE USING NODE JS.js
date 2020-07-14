// // PRACTICE 1


// const http = require('http');
// const fs = require('fs');
// const html_text = fs.readFileSync('gym.html');

// const server =  http.createServer((req,res) =>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(html_text);
// });


// server.listen(80,'127.0.0.1',()=>{
//     console.log("listening port at 80")
// })







// // PRACTICE-2

// const http = require('http');
// const fs = require('fs');
// const file_text = fs.readFileSync('gym.html');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content_Type":"text/html"});
//     res.end(file_text);
// });

// server.listen(80,"127.0.0.1",()=>{
//     console.log(`Your Server Is Runing AT Port 80 Check 127.0.01 in chrome !!!`);
// });