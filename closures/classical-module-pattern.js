/**
 * Created by James Yeates on 9/23/15.
 *
 * two ideas behind the module pattern
 *
 * 1. has to be an outer wrapping function (does not have to be an IFFE)
 * 2. there must be one or more inner functions that get returned
 *
 * This is not a class!! think of it as a module factory it is way to organize code
 *
 */

var mod =(function(){
   var obj = {name:"random object"};

   return {
       getName: function () {
           console.log(obj.name)
       }
   }
})();

mod.getName(); //random object

//instead of returning an anonymous object give it name
// This can help with style and debugging and you have
// a reference to other functions in this example sayHi
var mod1 = (function(){

    var obj = {name:"random object"};
    var publicAPI ={
        getName: function(){
            //sayHi can;t call but since there is the reference
            publicAPI.sayHi();
            console.log(obj.name);
        },
        sayHi: function(){console.log("HI");}
    };
    return publicAPI;
}());

mod1.getName();

/*
ES6
..this would be in separate file name.js
 */
//var obj ={name:"random"};
//export function x(){
//    return obj.name;
//}
//import x from name.js
//x();

