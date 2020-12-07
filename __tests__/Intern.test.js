const Intern = require("../lib/Intern");

test("New Intern", () => {
  const intern = new Intern("Robbie");
  expect(intern.name).toBe("Robbie");
});
