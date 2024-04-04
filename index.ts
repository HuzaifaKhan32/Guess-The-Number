import inquirer from "inquirer";
const random = Math.floor(Math.random() * 100 + 1); 
let number = await inquirer.prompt([
    {
        name: "guess",
        type: "number",
        message: "Guess the number between 1 to 100: "
    }
]);
let result = number !== random

while (result) {
    if (number.guess > random) {
        number = await inquirer.prompt([
            {
                name: "guess",
                type: "number",
                message: "Guessed number is less than the actual number:"
            }
        ]);
         
    } else if (number.guess < random) {
        number = await inquirer.prompt([
            {
                name: "guess",
                type: "number",
                message: "Guessed number is greater than the actual number:"
            }
        ]);
    } else{
        console.log("You guessed the correct number");
        result = number == random
    }
}

