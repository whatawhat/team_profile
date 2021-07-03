const inquirer = require("inquirer");

//Manager card
function generateManagerCard(manager) {
  return `<div class="col-md custom-card">
  <div class="card shadow">
  <div class="card-header bg-secondary text-light">
    <h3 class="card-title">${manager.name}</h3>
    <i class="d-inline bi bi-mouse2"></i>
    <h5 class="d-inline">${manager.getRole()}</h5>
    </div>
    <div class="card-body bg-info">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.email}</a></li>
     <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
     </ul>
    </div>
    </div>
  </div>`;
}

//Engineer Card
function generateEngineerCard(engineer) {
  return `<div class="col-md custom-card">
  <div class="card shadow">
  <div class="card-header bg-secondary text-light">
  <h3 class="card-title">${engineer.name}</h3>
  <i class="d-inline bi bi-bricks"></i>
  <h5 class="d-inline">${engineer.getRole()}</h5>
  </div>
  <div class="card-body bg-info">
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${engineer.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.email}</a></li>
     <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.github}</a></li>
     </ul>
    </div>
    </div>
  </div>`;
}

//Intern Card
function generateInternCard(intern) {
  return `<div class="col-md custom-card">
  <div class="card shadow">
  <div class="card-header bg-secondary text-light">
    <h3 class="card-title">${intern.name}</h3>
    <i class="d-inline bi bi-eyeglasses"></i>
    <h5 class="d-inline">${intern.getRole()}</h5>
    </div>
    <div class="card-body bg-info">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.email}</a></li>
     <li class="list-group-item">School: ${intern.getSchool()}</li>
     </ul>
    </div>
    </div>
  </div>`;
}

// TODO: Create a function that states what to show based on answers from list
//switch statement
function generateProfile(workers) {
  let templateArray = [];
  for (var i = 0; i < workers.length; i++) {
    if (workers[i].getRole() === "Manager") {
      templateArray.push(generateManagerCard(workers[i]));
    }
    if (workers[i].getRole() === "Engineer") {
      templateArray.push(generateEngineerCard(workers[i]));
    }
    if (workers[i].getRole() === "Intern") {
      templateArray.push(generateInternCard(workers[i]));
    }
  }
  return `  
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <section class="container-fluid py-5 bg-info text-center text-light">
      <h1>My Team</h1>
    </section>
      <div class="container mt-5">
      <div class="row row-cols-1 row-cols-sm-2 rows-cols-md-3 g-4">
      ${templateArray.join("")}
      </div>
      </div>

  </body>
  
  </html>`;
}

module.exports = generateProfile;
