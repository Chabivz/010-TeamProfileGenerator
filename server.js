const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const teamArray = [];

function addManager() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the manager\`s name? ',
          validate: val => /[a-z]/gi.test(val)          
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the manager\`s id? ',
        validate: val => /[1-9]/gi.test(val),          
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the manager\`s email? ',
        validate: val => /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/gi.test(val),
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\`s office number? ',
        validate: val => /[a-z]/gi.test(val)
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

function buildTeam() {

    teamArray.forEach(element => {

        console.log(element.name)
        console.log(element.id)
        console.log(element.email)
        if (element.officeNumber) { 
          console.log(element.officeNumber)
        } else if (element.github) {
          console.log(element.github)
        } else {
          console.log(element.school)
        }
    });    
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
                  return buildTeam();
              }
        }) 

}



addManager()