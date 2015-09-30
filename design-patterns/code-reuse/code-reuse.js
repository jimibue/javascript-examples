/**
 * Created by jcc on 9/30/15.
 */
//inheritance
function Beverage(name,temperature){
    this.name = name;
    this.temperature = temperature;
}

Beverage.prototype.drink = function(){
    return "drinking "+this.name;
};

//old way
//Coffee.prototype = new Beverage;
//chain the prototypes
Coffee.prototype = object.create(Beverage.prototype);

function Coffee(type) {
    //call Beverage function
    Beverage.call(this,'coffee','hot');
    this.type = type;
}
Coffee.prototype.sip=function(){
    return "sipping " + this.type+ " "+this.name;
};

///mixins- working with similar data with out classes

function Person(name){
    this.name = name
}
function Dog(name){
    this.name = name
}

//mixin object
var speaker = {
    speak:function(){
        return this.name +" is my name"
    }
};

var mover = {
    move:function(){
        return this.name +" is moving"
    }
};

//with JQuery
//Person now gets speak and move
$.extend(Person.prototype, speaker,mover);

//our own extend function
function extend(target){
    if(!arguments[1]){
        return;
    }
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        //loop through the object
        for(var prop in source){

            //copy proerties that are not already in target object
            //also make sure it is directly on source object
            if(!target[prop] && source.hasOwnProperty(prop)){
                target[prop] = source[prop];
            }
        }
    }

}

//watch next https://www.youtube.com/watch?v=MqIXZfqYL50&list=PL15G0RGjxzGdBqDPF4DDrlOt9YmjampzO&index=6