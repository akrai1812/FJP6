// function without paramter type and input type 

function sayHello(){
    console.log('hello from functions');
}

sayHello();

// funtions with paramter

function sum(num1,num2){
    let addition = num1+num2;
    console.log("addition of given numbers: "+addition);
}
sum(3,5);

//functions with return type

function multiply(num1,num2){
    return num1*num2;
}
let ans = multiply(3,5);
console.log(ans);

// functions are first class citizen in js
// we can store function in a variable

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

// IIFE

(function(){
    console.log('hello from IIFE');
})();

//IIFE with parameter

(function(num1,num2){
    console.log(num1/num2);
})(10,5);