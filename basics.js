// Values and Variables


let firstName="Pallavi";
console.log(firstName);

let myFirstAddress="Ludhiana";
let mySecondAddress="Pune";

console.log(myFirstAddress);
console.log(mySecondAddress);

//variable name conventions

let $function=27;
let pallavi_jain='pj';
console.log($function);
console.log(pallavi_jain);

//Data types

//1. Boolean
let nothingIsImpossible=true;
console.log(nothingIsImpossible);

console.log(typeof true);

//2.String
 //chnage the value boolean type to string type

 nothingIsImpossible="Yes"
 console.log(typeof nothingIsImpossible);

 //3. Undefined
 let name;
 console.log(name);
 console.log(typeof name);

 //dynamically change their values

 name="Pallavi";
 console.log(typeof name);

 //4.Number
 let num=20;
 console.log(num);

 //let,var and const

 //1.var :The scope of var variable outside the block and within itself also.
 if(true)
 {
     var varVariable='This is true';
 }
 console.log(varVariable);

 //var variable declared as many times but in case of let its opposite
var varVariable='hello';
console.log(varVariable);

 //2. let : the scope of the let variable within the block only

 if(true)
 {
     let letVariable="hi";
     console.log(letVariable);
 }

 //3.const
 const interestRate=0.3;
 //interestRate=1; give error using const for value does not change further
 console.log(interestRate);