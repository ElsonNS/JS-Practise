// let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// //score which was string is converted to number datatype

// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN

// let score1 = null
// let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1); //number
// console.log(valueInNumber1);//0

// let score2 = undefined;
// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2); //Number
// console.log(valueInNumber2); //NaN

// // "33" => 33
// // "33abc" => NaN
// // null => 0
// // undefined => NaN
// // true => 1
// // false => 0

// let isLoggedIn = null

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); //true

// // for boolean conversion
// // 1=> true
// // ""=> false
// // 0=> false
// // "eksin" => true
// // 54 => true
// //undefined => false
// //null => false
// //NaN => false

// let someNumber = 33

// let stringNumber = String(someNumber);
// console.log(stringNumber); //33
// console.log(typeof stringNumber); //strings

//**********Operations **********
let value = 3;
let negValue = -value;
console.log(negValue);

//common operations
/*
2+2 = 4
2-2 = 0
2*2 = 2 power 2 = 4
2**3 = 2 power 3 = 8
2/3 
2%3 = 2 means remainder

*/

let str1 = "hello";
let str2 = " elson";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "3"); //33

console.log(+true); //1
console.log(true); // true
console.log(+""); //1

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

//Read prefix and postfix on mdn js doc
//type conversion read from emca
