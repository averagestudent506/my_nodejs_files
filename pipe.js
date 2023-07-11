//A pipe function is a function that accepts a series of functions, which process an input parameter
 //and return a output which will be the input for the next function.


var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
console.log('request was made:' + req.url);
res.writeHead(200,{'content_type' :'text/plain'});
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
         myReadStream.pipe(res);
});

// server.listen(3000,'127.0.0.1');
//  console.log("listen port number 3000");