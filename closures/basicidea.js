/**
 * Created by James Yeates on 9/23/15.
 *
 * -A closure is when a function remembers it lexical scope even when it called out of its lexical scope
 *
 * -A closure is created when a inner functions is transported outside of its outer function
 *
 *
 */

function closureExample(){
    var x = "Save Me!!";
    return function()
    {
        return x;
    }
}
//call the outer function
var getX = closureExample();

//the function closureExample is gone now
//however its lexical scope has been remembered and var x has been closed over

console.log(getX());//saveMe!!!


function getTime(){
    var time = function(){
        return new Date;
    };
    var x =0;
    console.log(time()+ " "+ x++);
    //setTimeout is another example of a closure
    setTimeout(function(){
        console.log(time()+ " "+ x++)
    },1000)
}

getTime();

//classic example
var nums = [];
var funcs = [];

for (var i = 0; i<5; i++ ) {
    nums.push (i);
    x =function(){
        console.log(i)
    };
    funcs.push(x);
}
for (var j = 0; j<5; j++ ) {
    console.log(nums[j]); //prints 0-4 as expected
}
for (var k = 0; k<5; k++ ) {
    funcs[k](); //prints 5 5 5 5 5 5 CLOSURE!!!
}

//two ways to fix this
// 1 use the let keyword
//for (let i = 0; i<5; i++ ) {
//    nums.push (i);
//    x =function(){
//        console.log(i)
//    };
//    funcs.push(x);
//}

//2 use a IFFE
for (var l = 0; l<5; l++ ) {
    nums.push (l);
    x =function(){
        console.log(l)
    }();

}
//for (var k = 5; k<10; k++ ) {
//    funcs[k]; //prints 0 1 2 3 4 5
//}
