function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterIndex);
    numbers = numbers.substring(delimiterIndex + 1);
  }
  const nums = numbers.split(new RegExp(`${delimiter}|\n`));
  const negatives = nums.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  return nums.reduce((acc, num) => acc + parseInt(num), 0);
}

module.exports = { add };
