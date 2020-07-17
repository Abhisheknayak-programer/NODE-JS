const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const hostname = "127.0.0.1";

// initialising a static file for the user to access it very easily/////////////////////

app.use("/static",express.static('static'));
//////// http://127.0.0.1/static/index.js search this in your postman or chrome or any  of your brouser///


//setting the template engine for pug
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));


//our pug demo endpoint//

app.get("/demo",(req,res)=>{
    res.status(200).render('demo.pug',{ title:'Hey Abhishek Nayak', message :'YOU KNOW YOU WILL GET AWARD DUE TO YOUR CODING SKILLS BY NASA AND USA'});
    });
    



// creating your "/" pages//////////////////////////////////////////////////////////////

app.get("/",(req,res)=>{
res.send("Hi you are now visiting our home page");
});

app.get("/about",(req,res)=>{
    res.send("hi this is Abhishek nayak");
});

app.get("/error",(req,res)=>{
    res.send("<h1>404 ERROR PAGE NOT AVAILABLE</h1>");
});

app.post("/services",(req,res)=>{
    res.send("We provide a mindblowing sevicess which anyone cant be able to provide");
});


app.post("/contact",(req,res)=>{
    res.send("CONTACT-7077358291");
});

/////////////////////////////////////////////////////////////////////////////////////

app.listen(port,()=>{
    console.log(`Port is Started at http://${hostname}:${port}/`);
});