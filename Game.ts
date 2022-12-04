#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let raindow = chalkAnimation.rainbow("     <<<<<develop by Ubaid>>>>>");
    await sleep();
    console.log(chalk.greenBright `\n let's Start Number guessing Game`);
    raindow.stop();
}
await welcome();
async function game() {
    let input = await inquirer.prompt([{
            name: "userinput",
            type: "number",
            message: "Enter your Number between 10:"
        }]);
    let machine = Math.round(Math.random() * 10);
    console.log(chalk.magentaBright `Machine select Number: ` + machine);
    if (machine == input.userinput) {
        console.log(chalk.greenBright `Hurry you won the game`);
    }
    else {
        console.log(chalk.redBright `Ooops You lose `);
    }
    async function startgain() {
        var again = await inquirer.prompt([{
                name: "start",
                type: 'String',
                message: chalk.magentaBright `Do you want to restart (Yes or no)`,
            }]);
        if (again.start == "y" || again.start == "Y" || again.start == "yes" || again.start == "Yes") {
            game();
        }
        else {
            console.log(chalk.greenBright `Thanks for playing Game`);
        }
    }
    startgain();
}
game();
