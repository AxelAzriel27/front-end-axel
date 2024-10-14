//Ubah sysntax ES5 menjadi ES6
//1
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  let age = calculateAge(year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};
yearUntilRetirement({ year: 1987, firstName: "John" });

//2.
const addNumber = (...numbers) => {
  let sum = 0;
  numbers.map((num) => (sum += num));
  return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3. Arrow Function
const calculateArea = ({ radius, power = 2, phi = 3.14 }) =>
  phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4. Default Parameter
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};
makeAjaxRequest("www.google.com");
