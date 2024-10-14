
// //JavaScript Function
// //cara 1. Function Declaration
// function greetings1(){
//     console.log("Hello World");
// }
// greetings1() //call / Execute

// //cara 2. Function Expression
// let greetings2 = function (){
//     console.log("Hello world");
// }
// greetings2()

// //Parameter & Argument (input), return (output)
// //cara 1.
// //             Parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //             Argument
// let output = greetings1("John Doe");
// console.log(output);

// //Cara 2.
// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }
// let output2 = greetings2("John Doe");
// console.log(output2);

//Function Hoisting
//cara 1.
// let output = greetings1("John Doe");
// console.log(output);

// function greetings1(fullName){
//     return "Hello " + fullName;
// }

//cara 2. //ERROR
// let output2 = greetings2("John Doe");
// console.log(output2);

// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }

//Global Scope & Local Scope
// let x = 10; //Global Function

// function foo(){
//     let y = 20; //Local Function
//     console.log(x); //10
//     console.log(y); //20
//     if (y > 10){
//         let z = 30;
//         console.log(x);
//         console.log(y); //
//         console.log(z); //30
//     }
// }
// // console.log(z);
// // console.log(y); //ERROR
// console.log(x);
// foo();

