//const Manager = require('./lib/Manager.js');
//const Employee = require('./lib/Employee.js');
//const Intern = require('./lib/Intern.js');
//const Engineer = require('./lib/Engineer.js');

const inquirer = require("inquirer");

// TODO: Create a function that states what to show based on answers from list
//switch statement
function generateProfile (roles) {
  switch(roles) {
    case "Engineer":
      let message = "Engineer"
      return console.log(message);
      break;
    case "Intern":
      let messageOne = "Intern"
      return console.log(messageOne);
      break;
    case "None":
      let messageTwo = "None"
      return console.log(messageTwo);

  }
  };

  // if (Engineer) {
  //   engineerQuestions
  // } else if (Intern) {
  //   internQuestions
  // } else {
  //   generateProf
  // }
 
  // TODO: Create a function to generate team profile
  // function generateTeamProfile(answers) = {
  //   if (answers === 
  // }

const questionLoop = function loopQuest(){
  if (inquirer.prompt(roleQuestion).then(answers) === 'Engineer') {
    inquirer.prompt(engineerQuestions).then(answers)
  } else if (inquirer.prompt(roleQuestion).then(answers) === 'Engineer') {
    inquirer.prompt(engineerQuestions).then(answers)
}
}

questionLoop();
  module.exports = generateProfile;
