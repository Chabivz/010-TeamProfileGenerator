const inquirer = require('inquirer');
const fs = require('fs');


class Employee  {
  constructor(id, name, email, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

    getName(hotdog) {
      return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter name of new Employee!",
          // validate: val => /[a-zA-Z]/gi.test(val),   
          // The users guess must be a number or letter
          // validate: val => /[a-z1-9]/gi.test(val),          
        }
      ])
      .then(val => {
        let nameInput = val.name
        console.log(`Name: ${val.name}`);
        this.getId(nameInput);
      });
      
    }

    getId(nameInput) {
      // for loop of get ID
      return inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Enter ID!",
          // The users guess must be a number or letter
          validate: val => /[0-9]/gi.test(val),       
        }
      ])
      .then(val => {
        let empID = val.id;
        console.log(`\nID: ${val.id}`);
        this.getEmail(nameInput, empID);
        // getEmail(empName, val);
      });
    }
    
    getEmail(nameInput, empID) {
      
      return inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "Enter Email!",
          // The users guess must be a number or letter
          validate: val => /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/gi.test(val),          
        }
      ])
      .then(val => {
        let empEmail = val.email;
        this.getRole(empEmail, nameInput, empID);
      });
    }

  getRole(empEmail, nameInput, empID) {
    return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Pick role: ",
        // The users guess must be a number or letter
        choices: [
          { title: 'Manager', value: 'Manager' },
          { title: 'Engineer', value: 'Engineer' },
          { title: 'Intern', value: 'Intern' },
        ]
      }
    ])
    .then(val => {
      let empRole = val.role;
      if (empRole == "Manager") {
        const Manager = require("./Manager");
        Manager.getOfficeNumber()
        
      } else if (empRole == "Engineer") {
        const Engineer = require("./Engineer");
        Engineer.getGitHub()
        
      }
      const Intern = require("./Intern");
      Intern.getSchool()
       
      // console.log(`Name: ${nameInput}\nID: ${empID}\nEmail: ${empEmail}\nRole: ${empRole}\n`)
      // Intern.getSchool(empRole);

      // Ask's if the person wants to add another employee.
      // this.addAnotherEmployee();
    })
    
  }

  addAnotherEmployee() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Enter another employee?: "
        }
      ])
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice) {
          this.getName();
        } else {
          this.quit();
        }
      });
  }

}

module.exports = Employee;
