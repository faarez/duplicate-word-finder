// function to Check If word is valid and if not than remove other characters
export default function filterWord(word, length) {
    let number = length || 1;
    word = word.toLowerCase()
    let filteredWord;
    let regex = new RegExp(`^[a-zA-Z]+$`);
    let lengthRegex = new RegExp(`^[a-zA-Z]{${number},20}$`);

    if (!(regex.test(word))) {
        filteredWord = '';
        word.split('').forEach(letter => regex.test(letter) ? filteredWord += letter : null);
        filteredWord.length == 0 ? filteredWord = null : null;
        lengthRegex.test(filteredWord) ? null : filteredWord = null;

        return filteredWord;
    } else {
        lengthRegex.test(word) ? null : word = null;

        return word;
    }

}