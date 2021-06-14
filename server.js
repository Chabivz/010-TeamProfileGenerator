const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const teamArray = [
  {
    name: "Chris",
    id: 01,
    email: "chrisabiva@hotmail.com",
    officeNumber: 10,
  },
  {
    name: "Bee",
    id: 02,
    email: "Bee@hotmail.com",
    school: "University of Washington",
  },
  {
    name: "Axis",
    id: 03,
    email: "Axis@hotmail.com",
    github: "Axiiiis",
  },
];

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

async function generateHTML() {
 let createHTML ;
  
  `
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
            <div class="card-header">
                <!-- Name and Role -->
                <div>Name: </div>
                <div>Role: </div>
              

          <div class="card">
              <div class="card-content">
                  <div class="card-header">
                      <!-- Name and Role -->
                      <div>Name: </div>
                      <div>Role: </div>
                  </div>
                  <div class="card-body">
                      <!-- ID, Email, OfficeNumber/Intern/Github/  -->
                      <div>ID</div>
                      <div>Email</div>
                      <div>Office Number/Github/School</div>
                  </div>
              </div>
            </div>
            
      </div>
  </main>
  
  </body>
  </html>
  `
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
                  return FetchArray();
              }
        }) 
}


async function FetchArray() {
  try {
    teamArray.forEach(element => {
      
      console.log(`Name: ${element.name}`);
      console.log(`ID: ${element.id}`);
      console.log(`Email: ${element.email}`);

      if (element.officeNumber) {
        console.log(`Office Number: ${element.officeNumber}`);
      } else if (element.school) {
        console.log(`School: ${element.school}`)
      } else if (element.github) {
        console.log(`Github: ${element.github}`)
      } else {
        console.log("Employee")
      }
        
    });
  } catch (err) {
    console.log(err);
  }
}


function init() {
  addManager()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

addManager()