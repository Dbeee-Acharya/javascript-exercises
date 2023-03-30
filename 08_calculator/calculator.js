const add = function(numOne, numTwo) {
  return (numOne + numTwo);
};

const subtract = function(numOne, numTwo) {
	return (numOne - numTwo);
};

const sum = function(array) {
	let ans = 0;

  for (number of array) {
    ans += number;
  }

  return ans;
};

const multiply = function(array) {
  let ans = 1;

  for (number of array) {
    ans *= number;
  }

  return ans;
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(num) {
  let ans = 1;
	for (let i = 1; i <= num; i++) {
    ans *= i;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
