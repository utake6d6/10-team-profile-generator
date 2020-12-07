// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The other three classes will extend Employee. *super and this (super has to be used before this)

// In addition to Employee's properties and methods, Intern will also have:

//added properties:
// school

// added methods:
// getSchool()
// getRole()      // Overridden to return 'Intern'

const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = "school";
  }
  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
