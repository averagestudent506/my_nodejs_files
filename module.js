//var counter =function(arr){
  //return "there are"  +  arr.length  +  "element here";
//}
//console.log(counter(["faisal","iqbal"]));

//require() statement basically reads a JavaScript file,.... 
//executes it, and then proceeds to return the export object.

// counter is referece to before function...
var stuff = require("./stuff");   
console.log(stuff.counter(["faisal","iqbal"]));
console.log(stuff.adder(5,8));
console.log(stuff.adder(stuff.pi,8));