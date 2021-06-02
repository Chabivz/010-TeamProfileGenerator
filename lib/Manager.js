const inquirer = require('inquirer');
const fs = require('fs');
let Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
      super(id, name, email)
      this.officeNumber = officeNumber;
    }

  getOfficeNumber() {
      // Returns Manager
      // The three classes will extend Employee
    return inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Office Number: ",
        // validate: val => /[a-zA-Z]/gi.test(val),   
        // The users guess must be a number or letter
        // validate: val => /[a-z1-9]/gi.test(val),          
      }
    ])
    .then(val => {
      let nameInput = val.name
      console.log(`Office Number: ${val.name}`);
      const newManager = new Manager(15, 'blue', carPassengers);

    });
  }
}

module.exports = Manager;