//for synchronize....
// for create and delete the directiory
// var fs = require("fs");
// fs.mkdirSync("server");

var fs = require("fs");
fs.rmdirSync("server");
// for create and delete the js file.
//  var fs = require('fs');
// fs.unlinkSync('writefile.txt');

//for Asynchronize...

// var fs = require("fs");
// fs.mkdir('class' , function(){
//   fs.readFile('readfile.txt' , 'utf8' , function(err,data){
   
//        fs.writeFile('./class/me.txt' , 'utf8' , data)
      
//   });
// });


// var fs = require('fs');
// fs.mkdirSync('class');

//  var fs = require('fs');
//  fs.unlink('./class/me.txt' , function(err,data){
//    fs.rmdirSync('class');
//  });