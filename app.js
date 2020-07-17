const express = require('express');
const app = express();
const port = 80;
const hostname = "127.0.0.1";

app.get("/",(req,res)=>{
res.send("Hi you are now visiting our home page")
});

app.get("/about",(req,res)=>{
    res.send("hi this is Abhishek nayak");
});

app.get("/error",(req,res)=>{
    res.status(404).send("<h1>404 ERROR PAGE NOT AVAILABLE</h1>");
});

app.post("/services",(req,res)=>{
    res.send("We provide a mindblowing sevicess which anyone cant be able to provide");
});


app.post("/contact",(req,res)=>{
    res.send("CONTACT-7077358291");
});

app.listen(port,()=>{
    console.log(`Port is Started at http://${hostname}:${port}/`);
});