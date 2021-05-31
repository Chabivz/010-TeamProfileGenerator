

class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    }

    getName() {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: '\nEmployee name: ',
        }
      ])
    }

    getId() {

    }
    
    getEmail() {

    }

    getRole() {
        // Returns Employee
        // The three classes will extend Employee
    }
}
