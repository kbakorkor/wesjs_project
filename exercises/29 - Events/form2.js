/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const forhey = document.querySelector(`.forhey`);

forhey.addEventListener('click', function(e) {
        e.preventDefault();

        const shouldChangePage = confirm('This website might be malicious!, do you wish to proceed?');
        if (shouldChangePage) {
                window.location = e.currentTarget.href;
        }

        // console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(e.currentTarget.name.value);
        console.log(e.currentTarget.email.value);
        console.log(e.currentTarget.agree.checked);
});
