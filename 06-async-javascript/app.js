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

// boilWater(1000);
// console.log('chop carrots');
// for (let i = 0; i < 10000; i++) {
//   console.log('still busy');
// }

// function boilWater(time) {
//   console.log('boiling....');
//   setTimeout(() => {
//     console.log('done.');
//   }, time);
// }

// USAGE OF CALLBACK FUNCTION
//CALLBACK HELL
// boilWater();
// console.log('chop carrots');

// function boilWater() {
//   console.log('boiling....');
//   setTimeout(() => {
//     console.log('done.');
//     console.log('add carrots.');
//     setTimeout(() => {
//       console.log('carrots are done');
//       console.log('add onion');
//       setTimeout(() => {
//         console.log('onions are done');
//       }, 5000);
//     }, 5000);
//     console.log('chop onions');
//   }, 10000);
// }

// callbacks, promises,async/await

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
});
