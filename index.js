//Add Jest and Inquirer
const inquirer = require("inquirer");
const jest = require("jest");


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please write how to install your application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'table of contents',
    },
    {
        type: 'input',
        message: 'Please write about usage.',
        name: 'usage',
    },
    {
        //list of license
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'Eclipse', 'GNU AGPLv3', 'none'],
    },
    {
        type: 'input',
        message: 'Please list who contributed to you application.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests took place?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What are some questions?',
        name: 'Questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err => {
        if (err) throw err;
        console.log("Successfully made!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        var template = generateMarkdown(answers);
        console.log(template);
        writeToFile(template);
    })
}

// Function call to initialize app
init();
