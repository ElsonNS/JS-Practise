//Dates

// let myDate = new Date();
// console.log(myDate); //2024-11-18T17:50:05.609Z

// console.log(myDate.toString()); //Mon Nov 18 2024 23:20:30 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); //18/11/2024, 11:21:02 pm
// console.log(myDate.toISOString());//2024-11-18T17:51:36.225Z
// console.log(myDate.toJSON());//2024-11-18T17:51:36.225Z
// console.log(myDate.toDateString()); //Mon Nov 18 2024
// console.log(typeof myDate); //object

// let myCreatedDateOne = new Date(2023, 0, 23);
// console.log(myCreatedDateOne.toDateString()); //Mon Jan 23 2023

// let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDateTwo.toLocaleString()); //23/1/2023, 5:03:00 am

// let myCreatedDateThree = new Date("2023-01-14"); 
// console.log(myCreatedDateThree.toLocaleString()); //14/1/2023, 5:30:00 am

 let myCreatedDateFour = new Date("01-14-2023");
// console.log(myCreatedDateFour.toLocaleString());//14/1/2023, 12:00:00 am

//using timestamps
let myTimeStamp = Date.now(); //time in milliseconds
console.log(myTimeStamp);

console.log(myTimeStamp - myCreatedDateFour.getTime());
console.log(Math.floor(Date.now()/1000)); //time in seconds

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'GMT'
})