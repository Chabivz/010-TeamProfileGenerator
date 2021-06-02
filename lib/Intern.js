const inquirer = require('inquirer');
const fs = require('fs');
let Employee = require('./Employee');


class Intern extends Employee {
    constructor(school) {
        super(id, email, role)
        this.school = school;
        this.role = 'Intern';
      }
    // getSchool() {
    //     console.log("I gat dis");
    // }

    getSchool() {
      return inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Enter School: ",
        validate: val => /[a-zA-Z]/gi.test(val),   
        
      }
    ])
    .then(val => {
      let empSchool = val.school
      console.log(`School: ${empSchool}`);
      
    });
    }


  }

module.exports = Intern;