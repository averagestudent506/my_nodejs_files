
//var events =require("events");
// var myEmitter =new events.EventEmitter();

// myEmitter.on("some event",function(msg) {
//     console.log(msg);
// });
// myEmitter.emit("some event","events was emitted");

var events =require("events");
var util =require("util");
var Person;
var Person = function(name){
   this.name = name;
};
    util.inherits(Person, events.EventEmitter);
    var ali = new Person("ali");
    var ahmad = new Person("ahmad");
    var james = new Person("james");
    var people=[ali,ahmad,james];

people.forEach(function(person){
    person.on("speak",function(msg){
    console.log(person.name + "said:" + msg);
    });

});
ahmad.emit("speak","hi");
james.emit("speak","hello");
 