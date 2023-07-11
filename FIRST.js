  
// for one time....
//setTimeout(function()
//{console.log("three second have passed");},2000);
// for contiouse....
var time =0;
var timer=setInterval(function()
{   time +=2;
    //console.log(time +"second have passed");
     if(time > 7){
        clearInterval(timer);
     }

},2000)

//Node. js modules allow developers to better 
//structure, reuse, and distribute code.
