//Add Jest and Inquirer
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const generateProfile = require("./src/generateTeamProfile");
console.log(generateProfile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your team manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your team manager\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your team manager\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your team manager\'s office number?',
        name: 'officeNum',
    },
];

const roleQuestion = 
    {
        //list of roles
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'I\'m done adding team members.'],
    }


const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s github username?',
        name: 'username',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your intern\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your intern\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'school',
    },
];

// TODO: Create a function to write team profile
function writeToFile(data) {
    fs.writeFile("team.html", data, err => {
        if (err) throw err;
        console.log("Successfully made!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        var template = generateTeamProfile(answers);
        console.log(template);
        writeToFile(template);
    })
}

// Function call to initialize app
init();
