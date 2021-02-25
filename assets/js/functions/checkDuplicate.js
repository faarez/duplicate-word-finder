import filterWord from './filterWord.js';


// Check duplicate function, takes the words array that is need to be checked
export default function checkDuplicate(options) {
    let minLength = options.minLength || 3; // set the minimum length of words to check
    let minCount = options.minCount || 1; // set the minimum count of words to check
    let duplicateWords = {};

    // Iterate words Array and Print Duplicate
    options.wordsArray.forEach(word => {
        word = filterWord(word, minLength); // filter word, you can also pass word length, default is 3

        if (word != null) {

            // check if word already exists in Object and increase count if exists
            if (duplicateWords[word]) {

                // Increment the count
                duplicateWords[word].count += 1


            }

            // if word does not exist, add it in Object with initial count 1
            if (!!!duplicateWords[word]) {
                duplicateWords[word] = {
                    count: 1,
                }

            }

        }
    })


    // printing and returning 
    let newWordsArray = [];
    let keyArray = Object.keys(duplicateWords);
    keyArray.forEach(key => {
        if (duplicateWords[key].count >= minCount ? duplicateWords[key].count : null) {
            let word = key;
            let count = duplicateWords[key].count;

            // if #results is present print the results
            if (results) {
                // If Li tag exists Update the count in Li tag
                if (results.querySelector(`#${word}`)) {
                    results.querySelector(`#${word}`).innerHTML = `
                                <strong>Word:</strong> ${word} <strong>(${duplicateWords[word].count})</strong>
                            `;
                }

                // else print the li tag first
                else {

                    results.innerHTML += `
                                <li id="${word}" class='border p-3 my-3 list-unstyled'><strong>Word:</strong> ${word} <strong>(${duplicateWords[word].count})</strong></li>
                            `;

                }
            }

            newWordsArray.push({
                word: `${word}`,
                count: `${count}`
            })

        };
    })
    return newWordsArray;

}
