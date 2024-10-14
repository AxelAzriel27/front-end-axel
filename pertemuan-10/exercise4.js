// Array Exercise
let people = ["Greg", "Mary", "Devon", "James"];

// no 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// no 2
people.forEach(function (item) {
  console.log(item);
});

// no 3
people.shift();
console.log(people);

// no 4
people.pop();
console.log(people);

// no 5
people.unshift("Matt");
console.log(people);

// no 6
people.push("Axel");
console.log(people);

// no 7
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// no 8
let copyArray = people.slice(2);
console.log(copyArray);

// no 9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// no 10
let withBob = ["Bob"];
let finalResult = people.concat(withBob);
console.log(finalResult);

// Object Exercise
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// no 1
programming.languages.push("Go");
console.log(programming.languages);

// no 2
programming["difficulty"] = 7;
console.log(programming);

// no 3
delete programming.jokes;
console.log(programming);

// no 4
programming.isFun = true;
console.log(programming);

// no 5
programming.languages.map((language, index) => {
  console.log(`${index} - ${language}`);
});
