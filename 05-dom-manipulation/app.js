// USING QUERY SELECTOR

/*const para = document.querySelector('body > div:nth-child(2) > p:nth-child(2)'); // To copy selector from element from inspect
console.log(para);*/

//USING QUERY SELECTOR ALL

/*
const paras = document.querySelectorAll('p'); // To select multiple same elements from html
//console.log(paras);
//console.log(paras[1]);// selecting of of the p tags out of many using indexing

const errors = document.querySelector('.error');

paras.forEach(para => {
  console.log(para);
});
*/


// DIFFERENT WAYS TO GRAB ELEMENTS
/*
//Get an element by ID
const title = document.getElementById('pageTitle');

//Get elements by their class name
const errors = document.getElementsByClassName('error');

//get elements by their tag name
const paras = document.getElementsByTagName('p');
*/

// Changing the inner text of a tag
/*
const para = document.querySelector('p');
para.innerText = 'ninjas are awesome!';
console.log(para.innerText);
*/

//To append the inner text of a tag
/*
const para = document.querySelector('p');
para.innerText += 'ninjas are awesome!';
console.log(para.innerText);
*/

// Changing the inner text of multiple tags
/*
const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += 'new text';
});
*/

// Changing the tag inside the div tag
/*
const content = document.querySelector('.content');
content.innerHTML += '<h2> This is a new H2</h2>';
*/

// Adding new content to body of HTML
/*
const people = ['mario', 'ishika', 'durgesh'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
*/


/*
const link = document.querySelector('a');
console.log(link.getAttribute('href')); //To get attribute of a tag
link.setAttribute('href', `https://github.com/ishika-batra`); // Changing attribute value
link.innerText = `Ishika's GitHub`;

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
console.log(msg.getAttribute('class'));
msg.setAttribute('style', 'color:green;');


const title = document.querySelector('h1');
//title.setAttribute('style', 'margin:50px;'); // it completely overwrites the css of the HTML

console.log(title.style);
console.log(title.style.color);
*/

// Adding and removing classes
/*
const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');
*/

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if (p.textContent.includes('error')) {
    p.classList.add('error');
  }
  if (p.textContent.includes('success')) {
    p.classList.add('success')

  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');