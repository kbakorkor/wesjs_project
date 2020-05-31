/* eslint-disable no-console */
// const butts = document.querySelector(`.butts`);
// const coolButton = document.querySelector(`.cool`);

/* function handleClick() {
        console.log(`It got clicked!!!`);
} */

// const testClick = () => console.log(`Testing Click`);

// const hooray = () => console.log(`HOORAY`);

// butts.addEventListener(`click`, handleClick);
// coolButton.addEventListener('click', handleClick);

// butts.addEventListener(`click`, testClick);

// butts.removeEventListener(`click`, testClick);

// List on multiple items
const buyButtons = document.querySelectorAll('button.buy');

/* function buyItem() {
        console.log('BUYING ITEM');
}

function handleBuyButtonClick(Kell) {
        console.log('Binding the buy button');
        Kell.addEventListener('click', buyItem);
}
console.log(buyButtons);

buyButtons.forEach(handleBuyButtonClick); */

function handleBuyButtonClick(event) {
        console.log('You clicked on a buttton');
        const button = event.target;
        // console.log(button.textContent);
        // console.log(parseFloat(event.target.dataset.price));
        console.log(button);
        console.log(event.currentTarget);
        console.log(button === event.currentTarget);
        // stop this event from bubbling up
        // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
        `click`,
        function(event) {
                console.log('YOU CLICKED THE WINDOW');
                console.log(event.target);
                event.stopPropagation();
        },
        { capture: true }
);

const photoEl = document.querySelector(`.photo`);
photoEl.addEventListener('mouseenter', function(e) {
        console.log(e.currentTarget);
        console.log(this);
});
