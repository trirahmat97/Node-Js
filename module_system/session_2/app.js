//import file 
const getNotes = require("./session 2/note.js/index.js"); 

//show name variable
// const name = "tri rahmat aribowo";
// console.log(firstName)

//show add function 
// const sum = add(2, -8);
// console.log(sum);


//show call function
const msg = getNotes();
console.log(msg);

//validator
// const validator = require('validator');
// console.log(validator.isInt("tra"));

//chalk
const chalk = require('chalk');
const msg2 = chalk.inverse.red('Success!');
console.log(msg2);