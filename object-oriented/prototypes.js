/**
 * Created by James on 9/23/15.
 *
 * -Every object is built by a constructor function
 * -Each time a constructor is called a new object is created
 *
 * -a constructor makes an object 'based on' or 'linked to' its own prototype
 */

//constructor function
//this creates the function foo and .prototype and .constructor
//prototype links from the Function to the object and constructor links back
function Foo(who){
    this.me = who;
}

//add identify to the object
Foo.prototype.identify=function(){
    return "I am "+this.me;
};

// four things happen when a object is created
// 1. Object is created
//  2. Object gets linked
// 3. 'this' gets set
// 4. the 'this' or object is returned
var v1 = new Foo("v1");
var v2 = new Foo("v2");

//add speak on v2, v1 can't call this method
v2.speak = function(){
    return "hello";
};

console.log(v1.constructor === Foo); //v1 does not have a .constructor so it goes up the prototype chain
console.log(v1.constructor === v2.constructor);
console.log(v1.__proto__ === Foo.__proto__);
console.log(v1.__proto__ === Object.__proto__);
console.log(v1.__proto__ === v2.__proto__);

//shadowing generally a bad idea
v1.identify = function(){
    //how to get to orginal identify (bad style)
    Foo.prototype.identify.call(this);
    return"I shadowed the identify function in the prototype"
};

Foo.prototype.speak = function(){
    return this.identify(); //super unicorn magic haha this will be set for however called it
};




