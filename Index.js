const fs = require("fs");
const inquirer = require("inquirer");
const { inherits } = require("util");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the employee's name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the employee's id",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the employee's email address",
  },
  {
    type: "list",
    name: "employee",
    message: "Add another employee?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

questions();
