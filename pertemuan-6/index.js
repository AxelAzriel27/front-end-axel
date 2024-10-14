//IIFE & Callback Function
// 1. IIFE (Immediately Iinvoked Function Exp)
// // a. No params, args & return value
// (function (){
//     console.log("Hello World");
// }) ();
// // b. With params, args & return value
// let output = (function (fullName) {
//     return "Hello " + fullName;
// }) ("John Doe");
// console.log(output)

// 2. Callback Functione
// // a. No params, args & return value
// function sayHello(callbaack) {
//     callbaack();
// }

// sayHello(function (){
//     console.log("Hello world"); //callback function
// })

// b. With params, args & return value
// function sayHello(callbaack) {
//     let result = callbaack("John Doe");
//     console.log(result);
// }

// sayHello(function (fullName){
//     return "Hello " + fullName;
// })