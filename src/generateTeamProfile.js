

const inquirer = require("inquirer");

function generateManagerCard (manager) {
  return `<div>
    <h1>${manager.name}</h1>
    <h2>${manager.id}</h2>
    <h2>${manager.email}</h2>
    <h2>${manager.officeNumber}</h2>
  </div>`
}

// TODO: Create a function that states what to show based on answers from list
//switch statement
function generateProfile (workers) {
  let templateArray = [];
  for (var i = 0; i < workers.length; i++) {
    if (workers[i].getRole() === "Manager") {
      generateManagerCard
      templateArray.push(generateManagerCard(workers[i]))
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div>
          <h1>My Team</h1>
      </div>
      ${templateArray.join("")}
  </body>
  
  </html>`
  // switch(roles) {
  //   case "Engineer":
  //     let message = "Engineer"
  //     return console.log(message);
  //     break;
  //   case "Intern":
  //     let messageOne = "Intern"
  //     return console.log(messageOne);
  //     break;
  //   case "None":
  //     let messageTwo = "None"
  //     return console.log(messageTwo);

  // }
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

  module.exports = generateProfile;
