// buffer: temporery storage that store the small chunk of data and transfered anothwer place.
//stream: stream work on buffer concept.it break the data into small pieces and data loaded in buffer ..
// and then proessed data bit by bit and transfer data  to the client.increase performance



var http = require("http");
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname  + '/readMe.txt', "utf8");
var myWriteStream = fs.createWriteStream(__dirname  + '/writeMe.txt', "utf8");

// myReadStream.on('data' , function(chunk){
//     console.log("new data recieved");
//     myWriteStream.write(chunk);
myReadStream.pipe(myWriteStream);
