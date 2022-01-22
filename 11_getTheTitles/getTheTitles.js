const getTheTitles = function(array) {
  const results = [];
  array.forEach(book => {
    results.push(book.title);
  })
  return results;
};

// Do not edit below this line
module.exports = getTheTitles;
