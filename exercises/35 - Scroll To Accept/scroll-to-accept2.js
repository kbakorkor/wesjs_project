/* eslint-disable no-console */
console.log(`It works - Scroll`);
const terms = document.querySelector('.terms-and-conditions');

terms.addEventListener('scroll', function(event) {
        console.log(event.currentTarget.scrollTop);
        console.log(event.currentTarget.scrollTop);
});
