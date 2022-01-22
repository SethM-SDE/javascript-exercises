const palindromes = function (word) {
  const processedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join("");
  let palindromeCheck = "";
  for (let i = processedWord.length - 1; i >= 0; i-- ) {
    palindromeCheck += processedWord.charAt(i);
  }
  if (processedWord === palindromeCheck) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
