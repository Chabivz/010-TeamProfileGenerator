const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const teamArray = [];
// const teamArray = [
//   {
//     name: "Chris",
//     id: 01,
//     email: "chrisabiva@hotmail.com",
//     officeNumber: 10,
//   },
//   {
//     name: "Bee",
//     id: 02,
//     email: "Bee@hotmail.com",
//     school: "University of Washington",
//   },
//   {
//     name: "Axis",
//     id: 03,
//     email: "Axis@hotmail.com",
//     github: "Axiiiis",
//   },
// ];


const indexHTML = (teamArray) => {

  const empCards = generateTeam(teamArray)
  
  
  fs.writeFileAsync('./dist/index.html', generateHTML(empCards), err => {
    if (err) throw err;
    console.log('Success');
  });



}

function generateHTML(team) {
 return `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Good ReadMe Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="./style.css">
  </head>
  
  <body>
  <nav>
      <div class="MyTeam">My Team</div>
  </nav>
  <main>
      <div class="card-container">
      <div class="card">
        <div class="card-content">
            
      ${generateTeam(team)}
   
            
      </div>
  </main>
  
  </body>
  </html>
`
}

const generateTeam = async (team) => { 

const generateEngineerCard = (engineer) => {
  return `
  <div class="card">
    <div class="card-content">
        <div class="card-header">
            <!-- Name and Role -->
            <div>Name: ${engineer.getName()}</div>
            <div>Role: Engineer</div>
        </div>
        <div class="card-body">
            <div>ID ${engineer.getId()}</div>
            <div>Email ${engineer.getGithub()}</div>
            <div>Github ${engineer.getGithub()}</div>
        </div>
    </div>
  </div>`;
}

const generateInternCard = (intern) => {
  return `
  <div class="card">
    <div class="card-content">
        <div class="card-header">
            <!-- Name and Role -->
            <div>Name: ${intern.getName()}</div>
            <div>Role: Intern</div>
        </div>
        <div class="card-body">
            <div>ID ${intern.getId()}</div>
            <div>Email ${intern.getEmail()}</div>
            <div>Github ${intern.getSchool()}</div>
        </div>
    </div>
  </div>`;
}


  const generateManagerCard = (manager) => {
    return `
    <div class="card">
      <div class="card-content">
          <div class="card-header">
              <!-- Name and Role -->
              <div>Name: ${manager.getName()}</div>
              <div>Role: Manager</div>
          </div>
          <div class="card-body">
              <div>ID ${manager.getId()}</div>
              <div>Email ${manager.getEmail()}</div>
              <div>Github ${manager.getOfficeNumber()}</div>
          </div>
      </div>
    </div>`;
  }

const HTMLArray = [];
console.log(team);
// team.forEach(element =>  {
// let teammateRole = element.getRole();
//   switch (teammateRole) {
//     case "Manager":
//       return HTMLArray.push(generateManagerCard(element))
//     case "Intern":
//       return HTMLArray.push(generateInternCard(element))
//     default:
//       return HTMLArray.push(generateEngineerCard(element));
    

//   }
// });

}



function addManager() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the manager\`s name? ',
             
      },
      {
      type: 'input',
      name: 'id',
      message: 'What is the manager\'s id? ',
      
      },
      {
      type: 'input',
      name: 'email',
      message: 'What is the manager\'s email? ',
      
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number? ',
        
      }
      
  ])
  .then(res => {
      const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
      teamArray.push(manager);
      xRoads();
  }) 

}

function addEngineer() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the Engineer\'s name? ',
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the Engineer\'s id? ',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the Engineer\'s email? ',
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is the Engineer\'s GitHub Account? ',
        }
    
    ])
    .then(res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        teamArray.push(engineer);
        xRoads();
    }) 

}

function addIntern() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the Intern\'s name? ',
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the Intern\'s id? ',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the Intern\'s email? ',
        },
        {
        type: 'input',
        name: 'school',
        message: 'What school do you go attend to? ',
        }
    
    ])
    .then(res => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        teamArray.push(intern);
        xRoads();
    })
}


function xRoads() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Who would you like to add to the team?',
          choices: [
            { title: 'Engineer', value: 'Engineer' },
            { title: 'Intern', value: 'Intern' },
            { title: 'Build my team!', value: 'Build my team!' }  
          ],
          max: 1,
          hint: '- Space to select. Return to submit'
        }
    ])
        .then(res => {
            
            console.log(res.role)
            switch(res.role) {
                case 'Engineer':
                  return addEngineer();
                case 'Intern':
                  return addIntern();
                default:
                  return generateHTML(teamArray);
              }
        }) 
}


function init() {
  addManager()

}

init()
// 
