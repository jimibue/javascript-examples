/**
 * Created by jcc on 9/30/15.
 */
var obj = {};

//create properties
obj.name = "object yo";
obj["age"] = "just made";

//square brackets gives us a tiny bit more flexabilty
obj['new']="I can i use a keyword a reseved keyword";


//more control creating properties
obj.defineProperty(obj,"name_of_property",{
    // can make it write and read only and getter and setters
    //make it enumerable and other things
    value:"value of property"

});

obj.defineProperties(obj,{
    property1:{
        value:"property1"
    },
    property2:{
        value:"property2"
    }

});

//object.create() method

var barX = object.create(bar);

var johnDoe = {
    firstName: "John",
    lastName: "Doe",
    sayName: function(){
        return this.firstName + " "+ this.lastName();
    }
};

var janeDoe = object.create(johnDoe,{
    firstName:{value: "Jane"},
    greet: {
        value:function(){
            return "weird syntax and not available to John";
        }
    }
});
alert(johnDoe.sayName());
alert(janeDoe.sayName());





