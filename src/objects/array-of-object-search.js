/** write a program to find max age of 2 people with name starting with given string
Special Condition: Do not use any inbuilt functions.
*/
const people = [
  {
    name: "viral",
    age: 23,
  },
  {
    name: "vikrant",
    age: 24,
  },
  {
    name: "viraj",
    age: 28,
  },
  {
    name: "kiran",
    age: 39,
  },
  {
    name: "ketan",
    age: 43,
  },
  {
    name: "khushbu",
    age: 27,
  },
];

function findAge(str) {
  const maxAge = [];
  for (const person of people) {
    console.log(person);
    if (compareString(person.name, str)) {
      if (!maxAge[0]) {
        maxAge[0] = person.age;
        continue;
      }
      if (!maxAge[1]) {
        if (person.age > maxAge[0]) {
          maxAge[1] = maxAge[0];
          maxAge[0] = person.age;
          continue;
        }
        maxAge[1] = person.age;
        continue;
      }

      if (person.age > maxAge[0]) {
        maxAge[0] = person.age;
        continue;
      } else if (person.age > maxAge[1]) {
        maxAge[1] = person.age;
        continue;
      }
    }
  }
  return maxAge;
}

function compareString(baseSring, testString) {
  if (baseSring.length < testString.length)
    throw "test string is longer than base string";
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] !== baseSring[i]) return false;
  }
  return true;
}

console.log(findAge("v"));
