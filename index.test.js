const { sayHi } = require("./index");

test("anything", () => {
  const greeting = sayHi("hey");
  expect(greeting).toBe("hey");
});
