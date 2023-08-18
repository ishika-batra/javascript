// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert('You have been hacked!');

// hi = navigator.appVersion;
// console.log(hi);
// console.log(navigator.appVersion);

// OBJECT LITERAL
const book1 = {
  title: 'Book one',
  author: 'John Doe ',
  year: 2013,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.year);
console.log(book1.getSummary());

const book2 = {
  title: 'Book two',
  author: 'Jane Doe ',
  year: 2016,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(Object.values(book2));
console.log(Object.keys(book2));
