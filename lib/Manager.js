let Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
      super(name, id, email)
      this.officeNumber = officeNumber;
    }

  getOfficeNumber() {
      // Returns Manager
      // The three classes will extend Employee
    return this.officeNumber
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;