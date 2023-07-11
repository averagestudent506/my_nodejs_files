//Express is a node js web application framework that provides broad features for building web 
//and mobile applications. It is used to build a single page, multipage, and hybrid web application. 
//It's a layer built on the top of the Node js that helps manage servers and routes

var express = require("express");
var app = express();
// template engine........
app.set('view engine' , 'ejs');
app.get('/' , function(req,res){

    //res.send("this is homepage");
    // for html file....
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact' , function(req,res){
    //res.send("this is about your hompage");
    res.sendFile(__dirname + '/contact.html');
});
//exress route params.....
app.get('/myName/:id' , function(req,res){
   //res.send("my name is faisal iqbal and id is: " + req.params.id);  
});
  app.get('/profile/:name' , function(req,res){ // for callback...
     //res.send('waranty of this product is about two years and name is ' + req.params.name);
     var data = {age:22 , job:'devoloper' , hobbies :['eating' , 'fighting','gaming']};
     res.render('profile',{person:req.params.name, data:data});//inject the data..to html template/page 
  });

// app.listen(3000);
// console.log("message");

//js. Template engine helps us to create an HTML template with minimal code.
// Also, it can inject data into HTML template at client side and produce the final HTML.

//partial template..
//EJS partials, which are used to help us to avoid repetition of the same code on several web pages. 