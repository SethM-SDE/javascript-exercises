const ftoc = function(tempF) {
  const result = ((tempF - 32) * (5/9));
  if (result % result.toFixed() !== 0) {
    return parseFloat(result.toFixed(1));
  };
  return result;
};

const ctof = function(tempC) {
  const result = (tempC * (9 / 5)) + 32;
  if (result % result.toFixed() !== 0) {
    return parseFloat(result.toFixed(1));
  };
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
