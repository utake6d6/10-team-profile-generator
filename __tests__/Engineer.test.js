const Engineer = require("../lib/Engineer");

test("New Engineer", () => {
  const engineer = new Engineer("Bob");
  expect(engineer.name).toBe("Bob");
});
