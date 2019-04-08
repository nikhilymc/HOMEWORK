const express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("hello");
});
app.get('/home',(req,res)=>{
    res.send("welcome");
});

app.get('/contact',(req,res)=>{
    res.send('[{"name":"nikhil","age":25},{"name":"kohli","age":26}]');
});
app.get('/home/contact',(req,res)=>{
    res.send("<h1>my contact page</h1>");
});
app.listen(5000);