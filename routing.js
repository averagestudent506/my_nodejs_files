var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url);
    if(req.url ==='/home' || req.url ==='/'){
    res.writeHead(200,{'content_type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);
  }

  else if(req.url ==='/contact-us'){
    res.writeHead(200,{'content_type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/contact.html');
    myReadStream.pipe(res);
  }
  else if(req.url === '/api/persons'){
    var persons = [{name:'faisal', age:22,degree:'Bs computer science'},{name:'yahya',age:21,degree:'maths'}]
    res.writeHead(200,{'content_type':'text/json'});
    res.end(JSON.stringify(persons));
  }
  else{
    res.writeHead(404,{'content_type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/404.html');
    myReadStream.pipe(res);
  }
});
server.listen(3000,'127.0.0.1');
console.log("listen port no. 3000");


//Nodemon is a command-line tool that helps with the speedy development of Node.
//  js applications. It monitors your project directory and automatically restarts your node 
//  application when it detects any changes.