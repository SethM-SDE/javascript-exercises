const fibonacci = function(number) {
  if (number < 0) return "OOPS";
  let fibArr =[1, 1];
  let index = 1;
  while (index < number) {
    fibArr.push(fibArr[index] + fibArr[index-1]);
    index++;
  }
  return fibArr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
