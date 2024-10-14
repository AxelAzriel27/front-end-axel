//Ubah sysntax ES5 menjadi ES6
import { yearUntilRetirement } from "./calculate.js";
import { addNumber } from "./addNumber.js";
import { calculateArea as area } from "./calculateArea.js";
import { makeAjaxRequest } from "./makeAjaxRequest.js";

//1
yearUntilRetirement({ year: 1987, firstName: "John" });

//2.
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3. Arrow Function
let radius = 21;
const area21 = area({ radius });

radius = 7;
const area7 = area({ radius });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4. Default Parameter
makeAjaxRequest("www.google.com");
