const http = require('http');
const file = require('fs');
const { url } = require('inspector');
const home = file.readFileSync('home.html');
const about = file.readFileSync('about.html');
const services = file.readFileSync('services.html');
const contact = file.readFileSync('contact.html');
const hostname = "127.0.0.1";
const port = 168;

const server = http.createServer((req, res) => {
    u = req.url;

    res.statusCode200;
    res.setHeader("Content-type", "text/html");

   
    if (u == "/") {
        res.end(home);
    }
    else if (u == "/about.html") {
        res.end(about);
    }
    else if (u == "/services.html") {
        res.end(services);
    }
    else if (u == "/contact.html") {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>ERROR 404 NOT FOUND</h1>")
    }
});


server.listen(port, hostname, () => {
    console.log(`Your server is running at http://${hostname}:${port}/`);
});