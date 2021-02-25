import checkDuplicate from './functions/checkDuplicate.js';

let form = document.querySelector('form');
let textarea = document.querySelector('textarea');
let results = document.querySelector('#results');

// add event listener on form submit and textarea input
form.addEventListener('submit', onEventFunction);
textarea.addEventListener('input', onEventFunction);


//On Event Function
function onEventFunction(e) {
    e.preventDefault();
    results.innerHTML = '';
    let text;
    e.target.querySelector('textarea') ? text = e.target.querySelector('textarea').value : text = e.target.value;

    let words = text.split(/\s+|\r|\n/); // split into Array by whitespaces and linebreaks


    let checkOptions = {
        wordsArray: words, //required
        minLength: 5, // not required, default is 1
        minCount: 5, // not required, default is 1
    }

    // calling check duplicate and passing words array
    let result = checkDuplicate(checkOptions);

    console.log(result);

}
