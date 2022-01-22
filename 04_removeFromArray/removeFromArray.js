const removeFromArray = function(arr, ...removes) {
  results = [];
  arr.forEach(index => {
    if (!removes.includes(index)) {
      results.push(index);
    }
  });
  return results;
};

// Do not edit below this line
module.exports = removeFromArray;
