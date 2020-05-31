/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
// Make a div
const div = document.createElement(`div`);
// Add a class of wrapper to it
div.classList.add(`wrapper`);
// put it into a body
document.body.appendChild(div);
// Make an unordered list
const ul = `<ul>
    <li>One</li>
    <li>Tow</li>
    <li>Three</li>
</ul>`;

// Add three list items with the words "One, Two, Three" in them

// Put that list into the above wrapper
div.innerHTML = ul;

// console.log(div);
// create an image
const img = document.createElement(`img`);

// set the source to an image
img.src = `https:picsum.photos/500`;

// add a width of 250
img.width = 250;
img.height = 250;

// add an alt of cute puppy
img.alt = 'Cute Puppy';

// add a class of cute
img.classList.add(`cute`);

// Append that image to a wrapper
div.appendChild(img);

// with HTML string make a div, with two paragraphs inside of it
const myStringHTML = `
    <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    </div>
`;
// put this div before the unordered list from above
const ulElement = div.querySelector(`ul`);
ulElement.insertAdjacentHTML(`beforebegin`, myStringHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector(`.myDiv`);
console.log(myDiv);
myDiv.children[1].classList.add(`warning`);
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlaycard that takes in three arguments: name, age, and height
function generatePlaycard(name, age, height) {
        const functHTML = `
        <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They height is ${height} and ${age} years old. In Dog years this person would be ${age *
                7}. That would be a tall dog!</p>

        <button class="delete" type="button">&times; Delete</button>
        </div>
        `;

        return functHTML;
}

// have that fuction return html that looks like this:
// <div class="playerCard">
// <h2> Name - Age </h2>
// <p>They are Height and Age years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement(`div`);
newDiv.classList.add(`cards`);
// have that function make 4 cards
let newDivHTML = generatePlaycard('Kell', 12, 150);
newDivHTML += generatePlaycard('Wes', 11, 150);
newDivHTML += generatePlaycard('Jan', 10, 150);
newDivHTML += generatePlaycard('May', 9, 150);

// append those cards to the div
newDiv.innerHTML = newDivHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement(`beforebegin`, newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons
const buttons = document.querySelectorAll('.delete');
// make our delete function
function deletedCard(event) {
        const buttonThatGotClicked = event.currentTarget;
        // buttonThatGotClicked.parentElement.remove();
        buttonThatGotClicked.closest(`.playerCard`).remove();
}

// loop over them and attached a listener
buttons.forEach(button => button.addEventListener('click', deletedCard));

/* // Ex. 1 - 3
const src = `https://picsum.photos/100`;
const desc = `Doing cardio by creating a div in js`;
const myCardioHMTL = `

<div class="wrapper">
<h2>${desc}</h2>
<img src="${src}" alt="${desc}"
</div>
`;
console.log(myCardioHMTL);

// Ex. 5 - 7

const list = document.createElement(`ul`);
const li = document.createElement(`li`);
li.textContent = 'One';
list.appendChild(li);

document.body.insertAdjacentElement(`beforebegin`, list);

const li2 = document.createElement(`li`);
li2.textContent = 'Two';
li.appendChild(li2);

const li3 = li2.cloneNode(true);
li3.textContent = 'Three';
li2.insertAdjacentElement(`afterend`, li3); */
