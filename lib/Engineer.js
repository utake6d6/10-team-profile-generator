// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The other three classes will extend Employee. *super and this (super has to be used before this)

// In addition to Employee's properties and methods, Engineer will also have:

//added properties:
// github          // GitHub username

// added methods:
// getGithub()
// getRole()      // Overridden to return 'Engineer'

const Employee = require("../lib/Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = "github";
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
