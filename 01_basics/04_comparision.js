console.log("2" > 1) //true
console.log("02" > 1) //true
//JS converts here string to int 
//but it is recommended to 
//use same datatype for conversion

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined == 0) //false
console.log(undefined >= 0) //false
console.log(undefined < 0) //false

//== and === uses different logic 
//<,>=, > uses differnet logic

//strict check (checks datatypes also no conversion)
console.log("2"=== 2);// false