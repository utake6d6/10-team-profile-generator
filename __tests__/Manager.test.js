const Manager = require("../lib/Manager");

test("New Manager", () => {
  const manager = new Manager("Robert");
  expect(manager.name).toBe("Robert");
});
