/**
 * Created by James Yeates on 9/24/15.
 *
 * Inheritance is not the best word to describe what is happening
 * Behavior Delgation is better cause it helps explain the prototype chain
 * objects don't get copies of methods like in java  they
 */

function Parent(name){
    this.name = name;
}

Parent.prototype.iden= function(){
  return "I am "+this.name;
};

function Child(name,age){
    //mock super call
    Parent.call(this,name);
    this.age = age;
}

//now Childs prototype extends Parents prototype
//creates a new object and links this to it, but it
// does not bind this to the constructor or return it which is what we want
Child.prototype = Object.create(Parent.prototype);
//.constructor is broke here

//this works beacause the prototype is linked and it
// will go up the chain to find iden in the parent prototype
Child.prototype.speak = function(){
  return "Hello "+ this.iden() +" I am "+this.age+" years old";
};

var c= new Child("jon",2);
console.log(c.speak());