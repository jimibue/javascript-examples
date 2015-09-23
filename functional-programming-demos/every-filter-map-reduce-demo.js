/**
 * Created by James Yeates on 9/16/15.
 * Demonstration of Functional programming
 * using .each() .map() .filter() .
 * This was created following this video
 * https://www.youtube.com/watch?v=hWWr2fex2Tc
 */
//Array.every()!!!!!!!!!!!   * note .some()
//determine if array has null in it
var input = [1,2,4,null,3];
var isValid =true;

//one way to check
for(var i=0; i<input.length; i++){
    if(input[i]===null){
        isValid = false;
        break;
    }
}
console.log(isValid); //false


//better way to check functional programming
//every element must comply with this condition
isValid = input.every(function isNull(ele){
   return ele !== null;
});
console.log(isValid); //false

var hasNullEle = input.some(function isNull(ele){
    return ele === null;
});
console.log( hasNullEle ); //true

//Array.filter()!!!!!!!!!!!!!!!!
// filter- once again instead of a for loop use Array.filter
var people = [
    {name: "George", style:"cool"},
    {name: "Georges", style:"lame"}
];

var coolPeople = people.filter(function getCoolPeople (person) {
    return person.style ==='cool';
});

console.log(coolPeople); //{name: "George", style:"cool"}

//Array.map()!!!!!!!!!!!!!!!!
// filter- once again instead of a for loop use Array.filter
var complexPeople = [
    {name: "George", personality:{style:"cool", mood:"mellow" }},
    {name: "Georges", personality:{style:"cool", mood:"mellow" }}
];
var moodPeople = complexPeople.map(function(person){
   return {
       name: person.name,
       mood: person.personality.mood
   }
});
console.log(moodPeople);//[ { name: 'George', mood: 'mellow' },{ name: 'Georges', mood: 'mellow' } ]

//Array.reduce()!!!!!!!!!!!!!!!! *note reduceRight does the same except goes right to left
//sum 1-10
var x = [1,2,3,4,5,6,7,8,9,10];

var sum =x.reduce(function(currentSum,currentValue){
  return currentSum + currentValue;
});

console.log(sum); //55

//a common usage in combination is Array.filter.map


//Examples
var users = [
    {first:'bob', last:"Weild"},
    {first:'sally', last:"Greg"},
    {first:'billy', last:"fransico"}
];

var fullnames = users.map(function(person){
    //return person.first;
    return (capitilizeWord(person.first) +" "+capitilizeWord(person.last));
});

console.log(fullnames);

var arr = [1,2,3];
arr.reduce(function(accumulator, element){ return accumulator + element });

//.reduce print all nodes in tree structure example
var Tree = function(value){
    this.value = value;
    this.children =[];
};

//setup
var tree = new Tree(1);
var branch1 = new Tree(2);
var branch2 = new Tree(3);
var leaf1 = new Tree(4);
branch2.children.push(leaf1);
tree.children.push(branch1,branch2);

//not functioning correctly
function printValues(tree){
    return tree.children.reduce(function (acc, child){
        return tree.children.concat(printValues(child));
    },[tree]);

}
var x1 = printValues(tree);
console.log(x1);





//helper functions
function capitilizeWord(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
}



