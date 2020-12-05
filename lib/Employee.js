// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The first class is an Employee parent class with the following properties:
// name
// id
// email

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.employee;
  }
}

module.exports = Employee;

// and methods:
// getName()
// getId()
// getEmail()
// getRole()      // Returns 'Employee'
