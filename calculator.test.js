const calculator = require("./calculator");

test("add with empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
});
test("add with two numbers returns their sum", () => {
  expect(calculator.add([1, 2])).toBe(3);
});
