function isPalindromic(number) {
  let isPalindromic = true;
  const stringValue = String(number);
  for (let i = 0; i < stringValue.length/2; i ++) {
    if (stringValue.charAt(i) !== stringValue.charAt(stringValue.length - (i + 1))) {
      isPalindromic = false;
      break;
    }
  }
  return isPalindromic
}

function largestPalindromeMadeFromProductOfTwoNDigitNumbers(digits) { // Brute Force
  if (digits === 1) return 9;
  if (digits < 1) return null;
  const upperLimit = Math.pow(10, digits);
  const limit = upperLimit / 10
  let numberA = upperLimit;
  let currentPalindrome = 0;
  let numberB, number;
  while (numberA > limit) {
    numberA--;
    numberB = numberA;
    while (numberB > limit) {
      numberB--;
      number = numberA * numberB;
      const is = isPalindromic(number);
      if (is && currentPalindrome < number) {
        currentPalindrome = number;
      }
    }
  }
  return currentPalindrome;
}

console.log(2, largestPalindromeMadeFromProductOfTwoNDigitNumbers(2));
console.log(3, largestPalindromeMadeFromProductOfTwoNDigitNumbers(3));
// console.log(4, largestPalindromeMadeFromProductOfTwoNDigitNumbers(4));