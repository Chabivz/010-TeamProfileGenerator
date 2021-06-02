const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./Employee");

class Engineer extends Employee{
  constructor(id, name, email, github) {
    super(id, name, email, role)
    this.github = github;
    this.role = role;
        }

        
  getGithub() {
    // Returns Engineer
    // The three classes will extend Employee
    return inquirer
    .prompt([
      {
        type: "input",
        name: "gitHub",
        message: "Enter Github Handle: ",
        validate: val => /[a-zA-Z0-9]/gi.test(val),   
        
      }
    ])
    .then(val => {
      let empGitHub = val.gitHub
      console.log(`Github: ${empGitHub}`);
      fs.appendFile('log.txt', `${empGitHub}\n`, (err) =>
        
      err ? console.error(err) : console.log('Commit logged!')) 
    });
    }
}

module.exports = Engineer;
