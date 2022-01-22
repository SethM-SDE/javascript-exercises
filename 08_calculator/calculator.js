const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(index => {
    sum += index;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1
  arr.forEach(index => {
    product = product * index;
  })
  return product;
};

const power = function(num, pow) {
	let results = num;
  let count = 1;
  while (count < pow) {
    results = results * num;
    count++;
  };
  return results;
};

const factorial = function(num) {
  let result = 1;
	for (i = num; i > 0; i--) {
    result = result * i;
  };
  return result;
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
