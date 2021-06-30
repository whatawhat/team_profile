//Add Jest and Inquirer
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const generateProfile = require("./src/generateTeamProfile.js");
console.log(generateProfile);
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
let workers = [];

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
        name: 'officeNumber',
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

function getEngineer() {
    inquirer.prompt(engineerQuestions).then(answers => {
        console.log(answers);
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.username)
        workers.push(newEngineer);
        console.log(workers);
        menu();
    })
}

function getIntern() {
    inquirer.prompt(internQuestions).then(answers => {
        console.log(answers);
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        workers.push(newIntern);
        console.log(workers);
        menu();
    })
}

const menu = function() {
    inquirer.prompt(roleQuestion).then(answers => {
        console.log(answers);
        if (answers.role === "Engineer") {
            getEngineer()
        }
        if (answers.role === "Intern") {
            getIntern()
        }
        if (answers.role === "I\'m done adding team members.") {
            console.log("You're done!");
            let templateGenerator = generateProfile(workers);
            console.log(templateGenerator);
            writeToFile(templateGenerator)
        }
    })
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        workers.push(newManager);
        console.log(workers);
        menu();
    //questionLoop();
    //inquirer.prompt(roleQuestion).then(roles => {
        // console.log(answers);
        // generateProfile({answers});
            // switch(roles.role) {
            //   case "Engineer":
            //       inquirer.prompt(engineerQuestions).then(answers => {
            //           console.log(answers);
            //       });

                //let message = "Engineer"
                //return console.log(message);
            //     break;
            //   case "Intern":
            //     inquirer.prompt(internQuestions).then(answers => {
            //         console.log(answers);});
                // let messageOne = "Intern"
                // return console.log(messageOne);
            //     break;
            //   case "None":
            //       writeToFile(data.answers);
          
            
        //call switch statement here?
    //})
        //var template = generateTeamProfile(answers);
        //console.log(template);
        //writeToFile(template);
    })
}

// Function call to initialize app
init();
