// Creating HTML using all APIs learnt
/* const list = document.createElement(`ul`);
const li = document.createElement(`li`);
li.textContent = `Three`;
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement(`li`);
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = `One`;
list.insertAdjacentElement(`afterbegin`, li1);

const li4 = document.createElement(`li`);
li4.textContent = 'Four';
li5.insertAdjacentElement(`beforebegin`, li4);

const li2 = document.createElement(`li`);
li2.textContent = 'Two';
li1.insertAdjacentElement(`afterend`, li2); */

// Creating HTML from Strings and XSS
/* eslint-disable no-console */
/* console.log(`It works - Kelldick`);

const item = document.querySelector(`.item`);

const src = `https://picsum.photos/200`;
const desc = `Cute Pup <img onload="alert('HACKED')" 
scr="https://picsum.photos/50"/>`;
const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>
`;
// Turn a String into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment); */

// Traversing and Removing Nodes

const kell = document.querySelector(`.wes`);

console.log(kell.childNodes);
