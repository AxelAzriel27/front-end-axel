// Array in JavaScript
// Deklarasi Array
// // Cara 1. Array Literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// Tipe data yang bisa disimpan dalam array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //string
// let john = ["John", 30, true, [80, 90, 100]]; //mixed
// console.log(john);

// // // Array length
// // console.log(numbers.length);
// // console.log(students.length);
// // console.log(john.length);

// // Cara mengakses element/data tertentu dalam array
// // Melalui index array. Index selalu dimulai dari 0
// console.log(numbers[2]);
// console.log(students[1]);
// console.log(john[2]);
// console.log(john[3][1]);

// // Mengakses element/data terakhir dalam array
// let numbers2 = [1, 2, 3, , 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.length - 1]);
// let index = numbers2.findIndex(function (item) {
//   return item === "7";
// });
// console.log(index);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1. toString()
console.log(array.toString());

//2. join()
console.log(array.join());
console.log(array.join(", "));

//3. pop()
array.pop();
console.log(array);

//4. push()
array.push("Selamat pagi");
console.log(array);

//5. shift()
array.shift();
console.log(array);

//6. unshift()
array.unshift("Selamat pagi");
console.log(array);

//7. splice()
array.splice(2, 1); //hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);

//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayur);
let bijian = makanan.slice(6);
console.log(bijian);
