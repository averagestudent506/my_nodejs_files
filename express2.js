var express = require('express');

var app = express();
app.set('view engine','ejs');
app.use('/assets' , express.static('assets'))
app.get('/' , function(req,res){
    // for ejs file.....
    res.render('index');
});
app.get('/contact' , function(req,res){ //request statement..
    //console.log(); // the code b/w the request statement and response statement is called middle ware..
    //console.log(req.query);//for query string..

    res.render('contact' , {qs:req.query});//responce statement...
});

app.get('/myName/:id' , function(req,res){
      
 });
   app.get('/profile/:name' , function(req,res){
      
      var data = {age:22 , job:'devoloper' , hobbies :['eating' , 'fighting','gaming']};
      res.render('profile',{person:req.params.name, data:data});//inject the data..to html template/page 
   });
 
 app.listen(3000);
 console.log("listen port 3000 ");

 //Static files: are typically files such as scripts, CSS files, images, etc...
 // that aren't server-generated, but must be sent to the browser when requested.
 //we use the function li express.static....

 //The Query String module: is used to provides utilities for parsing and formatting URL query strings.
 //It can be used to convert query string into JSON object and vice-versa. 
 //The Query String is the part of the URL that starts after the question mark(?).