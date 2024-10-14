// //Destructuring pada array and object
// //Array
// const numbers = [1, 2, 3, 4];
// const [first, second] = numbers;
// console.log(first, second);

// //Object
// const person = { name: "Alice", age: 25 };
// const { name, age } = person;
// console.log(name, age);

// //Destructuring dengan Mengambil Sebagian Item
// //Array
// const colors = ["red", "green", "blue"];
// const [, secondColor] = colors;
// console.log(secondColor);

// //Object
// const car = { brand: "Toyota", model: "Corolla", year: 2020 };
// const { brand } = car;
// console.log(brand);

// //Destructuring dengan Default Value
// //Array
// const [a = 10, b = 5] = [1];
// console.log(a, b);

// //Object
// const { name = "John", age = 30 } = { name: "Alice" };
// console.log(name, age);

// //Destructuring dengan Rest Operator
// //Array
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first, rest);

// //Object
// const { name, ...others } = { name: "Alice", age: 25, city: "New York" };
// console.log(name, others);
