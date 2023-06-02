const firstName = "Ishika";

function logger() {
  console.log("party time");
  console.log("party time");
  console.log("party time");
  console.log("party time");
}

function adder(num1, num2) {
  console.log(num1 + num2);
}

function toUpper(text) {
  const upperCased = text.toUpperCase()
  console.log(upperCased);
}

logger();
adder(5, 10);
toUpper(firstName);

// STRING CONCATENATION

//Old Way
console.log("Hello my name is " + "Ishika");
console.log('Hello it\'s me Ishika!');

//New way
const age = 22;

console.log(`Hello it's me and my name is ${firstName} `);

console.log(`Hello it's me ${firstName} and my age is ${age}.`)

const combined = firstName + age;
console.log(combined);
console.log(typeof combined);
//when string and integer data type is combined it results in string data type.