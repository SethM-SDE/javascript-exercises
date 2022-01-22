const caesar = function(str, mod) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const lowerAlpha = [...alpha];
  const upperAlpha = [...alpha.toUpperCase()];
  const strArr = [...str];
  const result = [];

  strArr.forEach(char => {
    let newIndex;
    if (upperAlpha.includes(char)) {
      newIndex = upperAlpha.indexOf(char) + mod;
      result.push(upperAlpha[((newIndex < 0) ? (26 + newIndex)
                                             : (newIndex > 25) ? (0 + (newIndex % 26))
                                                               : newIndex )]);
    } else if (lowerAlpha.includes(char)) {
      newIndex = lowerAlpha.indexOf(char) + mod;
      result.push(lowerAlpha[((newIndex < 0) ? (26 + newIndex)
                                             : (newIndex > 25) ? (0 + (newIndex % 26))
                                                               : newIndex )]);
    } else {
      result.push(char);
    }
  })
  return result.join("")
};

// Do not edit below this line
module.exports = caesar;
