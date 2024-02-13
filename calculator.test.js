const calculator = require("./calculator");

test("add with empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
});

test("add with two numbers returns their sum", () => {
  expect(calculator.add("1,2")).toBe(3);
});

test("add with any amount of numbers returns their sum", () => {
  expect(calculator.add("1,2,3,4,5")).toBe(15);
});

test("add with new lines between numbers returns their sum", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});

test("add with different delimiters returns their sum", () => {
  expect(calculator.add("//;\n1;2")).toBe(3);
});

test("add with negative numbers throws exception", () => {
  expect(() => calculator.add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed -2,-4"
  );
});
