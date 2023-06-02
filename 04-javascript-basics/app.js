// IF ELSE 
/*
const age = 18;
if (age >= 18) {
  console.log("You are good to go!");
}
else if (age < 15) {
  console.log("You are very young");
}
else {
  console.log("You can't go");
}
*/

//ARRAYS
/*
const schedule = ['Wake up', 'Eat', 'Film a video', 'Watch things on netflix'];
console.log(schedule); //Print an array
console.log(schedule[3]); //Print a particular element of an arrays
schedule.push("new thing"); //Adding new element at last
console.log(schedule);
schedule.pop(); //Removing last element 
console.log(schedule);
schedule.unshift("beginning"); // Adding new element in the beginning 
console.log(schedule);
schedule.shift(); // Removing element in the beginning 
console.log(schedule);
console.log(schedule.indexOf("Eat"));
*/

//OBJECT AND KEYWORD THIS
/*
const user = {
  firstName: "Ishika",
  age: 22,
  married: false,
  purchases: ['phone', 'car', 'laptop'],

  sayName: function () {
    console.log(this); //THIS
  }
};

user.sayName();

function saymyAge() {
  console.log(`My age is ${this}`)
}
saymyAge();

*/

//FOR LOOP 
/*
const names = ["Ishika", "Durgesh", "Name1", "Name2"];

for (namei of names) {
  console.log(namei);
  if (namei === "Durgesh") {
    console.log(`Durgesh is in my list!`);
    break;
  }
}
*/

//WHILE LOOP
/*
let loading = 0;
while (loading < 100) {
  console.log(`Website is still loading!`);
  loading++;
}
*/

