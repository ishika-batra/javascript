// Javascript is single threaded, synchronous language.
// SYNCHRONOUS

// console.log(`I'm first`);
// console.log(`I'm second`);
// console.log(`I'm third`);

// console.log(`I'm first`);
// boilingWater();
// console.log(`I'm third`);

// function boilingWater() {
//   console.log('boiling....');
//   for (let i = 0; i < 1200; i++) {
//     console.log('still not done...');
//   }
//   console.log('done.');
// }

// Making soup

// boil Water for 10 min
// chop carrots
// add carrots boil for 5
// chop carrots
// add carrots boil for 5 min

// boilWater(10000);
// console.log('chop carrot');
// boilWater(5000);
// console.log('chop onion');
// boilWater(5000);

// function boilWater(time) {
//   console.log('boiling....');
//   for (let i = 0; i < time; i++) {
//     console.log('still not done...');
//   }
//   console.log('done.');
// }

// ASYNCHRONOUS

boilWater(1000);
console.log('chop carrots');
for (let i = 0; i < 10000; i++) {
  console.log('still busy');
}

function boilWater(time) {
  console.log('boiling....');
  setTimeout(() => {
    console.log('done.');
  }, time);
}
