const http = require('http');
const file = require('fs');
const hostname = "127.0.0.1"
const port = 3000;
const home = file.readFileSync("home.html")
const about = file.readFileSync("about.html")
const services = file.readFileSync("services.html")
const contact = file.readFileSync("contact.html")


const server = http.createServer((req, res) => {
    url = req.url;
    res.statusCode200;
    res.setHeader("Content-type", "text/html");

    if (url == "/") {
        res.end(home);
    }
    else if (url == "/about.html") {
        res.end(about);
    }
    else if (url == "/services.html") {
        res.end(services);
    }
    else if (url == "/contact.html") {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>ERROR 404 NOT FOUND</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`The Server Is Running At http://${hostname}:${port}/`);
});
