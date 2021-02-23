const getInput = require("./get-input.js");

// 1. take in our user's age, saving it in a variable
const userAge = getInput();
const ageNextYear = Number(userAge) + 1;
// 2. check if they want help
if (userAge === '--help'){'please enter your age after \"node mental-age.js" and a space.'}
console.log('This function logs your mental age.');
// 3. divide it by 2 and add 3
const mentalAge = userAge / 2 + 3;
// 4. print out the user's age in a sentence
const userAgeSentence = "Your age is " + userAge + "."
console.log(userAgeSentence);
console.log("Next year you'll be " + ageNextYear + " years old.")
// 5. print out the user's mental age in a sentence.
const mentalAgeSentence = "Your mental age is " + mentalAge + "."
console.log(mentalAgeSentence);

