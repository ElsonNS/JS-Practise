// // primitive and non primitive datatypes
// //based on memory storage and memory access these are categorized

// //primitive (call by value -- copy mein changes hoga actual value mein nahi)

// /* String, Number, Boolean, null, undefined, Symbol, BigInt
// */

// const isLoggedIn = false
// const outsideTemp = null
// let uerEmail; //undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id) //Symbol(123)
// console.log(anotherId) //Symbol(123)
// console.log(id === anotherId) //false
// //as is the job of symbol for maintaining uniqness




// //javascript is dynamically typed language
// //all types check are executed at runtime

// //non primitive(reference type -- changes actual value directly)
// //array, objects, functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name: "elson",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world")
// }

// console.log(typeof myFunction) //function
// console.log(typeof heros); //object

// //type of output for 
// //function -> function object
// //undefined -> undefined
// //null -> object
// //array -> object


//*********** */

//Stack(Primitive), Heap(Non-Primitive)
//In stack memory we get copy of variable 
//In heap memory we get reference of the variable

let myYoutubename = "elsonnagdotcom";

let anotherName = myYoutubename;
anotherName = "JavascriptLearner"
console.log(myYoutubename) //elsonnagdotcom
console.log(anotherName) //JavascriptLearner


let userOne = {
    email: "user@google.com",
    upi: "user@ybi"
}

let userTwo = userOne;

userTwo.email = "elson@google.com";

console.log(userOne.email) //elson@google.com
console.log(userTwo.email) //elson@google.com
