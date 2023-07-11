var http = require("http");

var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
   res.writeHead(200,{"content_type":"text/plain"});
   res.end("node js")
});
//as a client...
// server.listen(3000,'127.0.0.1');
// console.log("listen port number 3000");


