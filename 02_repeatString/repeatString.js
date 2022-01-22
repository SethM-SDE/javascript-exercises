const repeatString = function(str, num) {
  let i = 0;
  let result = '';
  if (num < 0) result = 'ERROR';
  while (i < num) {
    result += str,
    i++;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
