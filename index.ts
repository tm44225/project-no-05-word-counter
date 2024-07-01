#! /usr/bin/env node 

import inquirer from "inquirer";

type wordCount = (str: string) => void;

const wordCount: wordCount = (string) => {
    const words = string.trim().split(/\s+/g);

    console.log("Total word in the para are: " + words.length);

}

const getInput = async() => {
    const userinput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter your para: "
        }
    ]);
    await wordCount(userinput.para);

}

await getInput();