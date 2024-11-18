const name = "elson"
const repoCount = 20;

//old way of string concatenation
//console.log(name + repoCount+ " Value"); 


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//String declaration 
const gameName = new String('elsonfc');

console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase()) //ELSONFC
console.log(gameName)  //elsonfc
console.log(gameName.charAt(2)) //s
console.log(gameName.indexOf('o')) //3

const newString = gameName.substring(0, 4); //elso means it prints from 0 index till 3 index only
console.log(newString);

const anotherString = gameName.slice(-5, 4); //so
console.log(anotherString);

const newStringOne = "    elson    ";
console.log(newStringOne)
console.log(newStringOne.trim()); //removes starting and ending whitespaces from the string

const url = "https://elson.com/elson%20vitbhopal"

console.log(url.replace('%20', '-'));

console.log(url.includes('elson')); //true
console.log(url.includes('harsh')); //false

//String to array conversion
const gameNameOne = 'elson-vitBhopal-mandsaur';
console.log(gameNameOne.split('-')); //gameNameOne is converted to array