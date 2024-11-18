// const score = 400;
// console.log(typeof score); //number

// //we can explicity define datatype as number
// const balance = new Number(100)
// console.log(balance); //[Number: 100]

// //Number to string conversion
// console.log(balance.toString()); 
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8966;
// //Precision returns a string
// console.log(otherNumber.toPrecision(3));  //23.8

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString()) //10,00,000 us standard values
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000 indian standard

// //Numbers also have properties like maxValue, minvalue
// //check by typing Number.MAX_VALUE


//*************Maths */

// console.log(Math) //Math is an Object with properties
// console.log(Math.abs(-45)); //45
// console.log(Math.round(4.25)) //4
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.9))//4
// console.log(Math.sqrt(9)); //3
// console.log(Math.max(4, 3, 6, 9)); //9
// console.log(Math.min(4, 2, 1 , 0)); //1


//random has value range from 0 to 1
console.log(Math.random()); 

//how to change the random value
console.log((Math.random()*10) + 1); //range is from 1 to 10
console.log(Math.floor((Math.random()*10) + 1)); 

//setting range between a max and min value
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *(max - min + 1) + min));