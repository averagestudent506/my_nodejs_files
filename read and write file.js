//synchronize......
//Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// var fs = require("fs");
// var readFile= fs.readFileSync("readfile.txt" , "utf8");
// console.log(readFile);

// fs.writeFileSync("writefile.txt" , readFile);


//Asynchronize.....
//Next operation can occur while the previous operation is still getting processed.does not wait for another instruction

// var fs = require("fs");
// fs.readFile("readfile.txt" , "utf8" , function(err,data){
//     fs.writeFile("writefile.txt" , data);
  
// });

var fs = require('fs');

// Asynchronous file reading
fs.readFile('readfile.txt', 'utf8', function(err, data){
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Process the data read from the file
  console.log('File content:', data);

  // Asynchronous file writing
  var newData = data.toUpperCase(); // Example: converting content to uppercase
  fs.writeFile('writefiles.txt', newData, 'utf8', function(err){
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File write operation complete.');
  });
});

