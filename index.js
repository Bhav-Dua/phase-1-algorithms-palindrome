function isPalindrome(word) {
  let backwards = '';
  for (let i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards === word;
}

/* 
  Creates a variable with the string backwards
*/

/*
  Uses a loop to pass through each character of the string from end to beginning, adding it to the backwards variable
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
