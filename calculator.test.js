const calculator = require("./calculator");

test("add with empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
  expect(calculator.add("1,2")).toBe(3);
});
