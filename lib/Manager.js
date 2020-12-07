// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The other three classes will extend Employee. *super and this (super has to be used before this)
// In addition to Employee's properties and methods, Manager will also have:

//added properties:
// officeNumber

// added methods:
// getRole()       // Overridden to return 'Manager'

const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = "officeNumber";
  }
  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
