/* eslint-disable no-console */

const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.card');
        // Grab the image src
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        const name = card.querySelector('h2').textContent;

        // populate the modal with the new info
        modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${desc}</p>
        
        `;
        // show the modal info
        modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
        modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
        const isOutside = !event.target.closest('.modal-inner');
        // console.log(isOutside);
        if (isOutside) {
                closeModal();
        }
});

window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
                closeModal();
        }
});
