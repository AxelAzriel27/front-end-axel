// JavaScript Object & Conditional
// Deklarasi Object
// object Literal
// let john = {
//   firstName: "John",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
//   addres: {
//     street: "Jl. Arnold Mononutu Airmadidi",
//     city: "Minahasa Utara",
//     province: "Sulawesi Utara",
//     postalCode: 6666,
//   },
// };
// console.log(john);

// // Mengakses properti dalam object
// // 1. Dot notation
// console.log(john.firstName); // John
// console.log(john.age); // 30
// john.age = 31; // Ubah nilai
// console.log(john);
// john.job = "Teacher"; // Tambah properti baru
// console.log(john);
// // 2. Bracket notation
// console.log(john["isMarried"]);
// john["Nationality"] = "Indonesia";
// console.log(john);

// // Object method
// john.sayGreetings();

// // Objectt inside object
// console.log(john.addres.city);

// // Delete property dalam object
// delete john.grade;
// console.log(john);

// JavaScript Conditional
// 1. if - else
// Jika suhu hari ini lebih dari atau sama dengan 37,
// Tampilkan suhu hari ini panas
// Jika tidak tampilkan suhu hari ini dingin
// let suhu = 37;
// if (suhu >= 37) {
//   console.log("Suhu hari ini panas");
// } else {
//   console.log("Suhu hari ini dingin");
// }

// 2. if - else if - else
// Jika nilai 100-80 tampilkan grade A
// jika nilai 70 - 79 tampilkan grade B
// Jika nilai 50 -69 tampilkan grade C
// jika nilai dibawah 50 tampilkan garde D

// let grade = 49;
// if (grade >= 80 && grade <= 100) {
//   console.log("Grade A");
// } else if (grade <= 79 && grade >= 70) {
//   console.log("Grade B");
// } else if (grade <= 69 && grade >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// 3. Switch - case
// Jika angka 1 tampilkan januari
// Jika angka 2 tampilkan februari
// Jika angka 3 tampilkan maret
// :
// jika angka 12 tampilkan desember

// let number = 1;
// switch (number) {
//   case 1:
//     console.log("Januari");
//     break;
//   case 2:
//     console.log("Februari");
//     break;
//   case 3:
//     console.log("Maret");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("Mei");
//     break;
//   default:
//     console.log("Not found");
//     break;
// }
