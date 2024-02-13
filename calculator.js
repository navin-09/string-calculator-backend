function add(numbers) {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers[0]);
  return parseInt(numbers[0]) + parseInt(numbers[1]);
}

module.exports = { add };
