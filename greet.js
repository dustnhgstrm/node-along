const getInput = require("./get-input.js");

// console.log to print out a greeting to the user
//
// 1. get the user's name
const userName = getInput()
// 2. save it in a variable
console.log("Hello" + " " +  userName);
// 3. print out what's in that variable