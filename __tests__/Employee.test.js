const Employee = require("../lib/Employee");

test("New Employee", () => {
  const employee = new Employee("Bert");
  expect(employee.name).toBe("Bert");
});
