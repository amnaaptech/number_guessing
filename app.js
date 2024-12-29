#!vusr/bin/env node
"use strict";
// import inquirer from "inquirer";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("\n Welcome to CodeWithAmna -CLI number Guessing \n");
// let Guess = Math.floor(Math.random() * 10+1);
// let Guess_number = await inquirer.prompt([
//     {
//         name:"userGuessedNumber",
//         type:"number",
//         message:"Guess a number between 1 and 10"
//     }
// ]);
// if(Guess_number.userGuessedNumber === Guess){
//     console.log(" Congratulation You Win");
// }
// else{
//     console.log("Sorry You Lose");
// };
// // #!/usr/bin/env node
//  import inquirer from "inquirer";
// console.log("\nWelcome to - CLI Number Guessing\n");
// let Guess = secretNumber;
//     console.log(secretNumber = Math.floor(Math.random() * 5 + 1));
//     let guessedNumber = await inquirer.prompt(
//         {
//             name: "userGuessedNumber",
//             type: "number",
//             message: "Guess number between number 1 to 5!",
//         }
//     );
//     if (guessedNumber.userGuessedNumber === secretNumber) {
//         console.log("Congratulations! You Win");
//     } else {
//         console.log(`Sorry, you lose.`);
//     };
// #!/usr/bin/env node
var inquirer_1 = require("inquirer");
var secretNumber = Math.floor(Math.random() * 5 + 1);
console.log(secretNumber);
var guessedNumber = await inquirer_1.default.prompt({
    name: "userGuessedNumber",
    type: "number",
    message: "Guess number between 1 to 5.",
});
if (guessedNumber.userGuessedNumber === secretNumber) {
    console.log("Congratulations! You Win");
}
else {
    console.log("Sorry, you lose.");
}
;
