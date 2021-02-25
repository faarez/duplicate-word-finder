Fast & Simple Duplicate Word Finder Algorithm

You can use the UI or only the checkDuplicate function from functions directory.

About checkDupliate Function

[✓] Takes array of words to check as one of options in parameter
[✓] returns array of objects with word and count(how many times it was found)
[✓] You can pass minimum length of word as an option || Default is 1
[✓] You can pass minium count of word as an option || Default is 1

checkDuplicate Function Usage

let options = {
    wordsArray: words, //pass your array of words here
    minlength: 5, // minimum length of the words
    minCount: 1, // minimum number of times the word was repeated
}

let result = checkDuplicate(options); // returns array of objects