const express=require('express');
const handle=require('express-handlebars');
var app=express();
app.engine('handlebars',handle({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());
app.post('/data',(req,res)=>{
  var name=req.body.name;
  var address=req.body.addr;
  var age=req.body.age;
  var place=req.body.place;
  var mail =req.body.mail;
res.send(name);
res.send(address);
  console.log(name,address,age,place,mail);

});
app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/home',(req,res)=>{
    res.send("welcome");
});
app.get('/about',(req,res)=>{
    res.render("about");
});
app.get('/contact',(req,res)=>{

    res.render("contact");
});
app.get('/home/contact',(req,res)=>{
    res.send("<h1>my contact page</h1>");
});
app.get('//contact',(req,res)=>{
    
    res.send('[{"name":"nikhil","age":25},{"name":"kohli","age":26}]');
});
app.get('/gallery',(req,res)=>{

    res.render("gallery");
});
app.listen(5000);