function isOdd(number) {
  return number % 2 === 0;
}

function findTheSumOfTheEvenFibonacciNumbersBelow(number) {
  const evenFibonacciNumbers = [];
  let previousNumber = 1;
  let currentNumber = 1;
  while(currentNumber < number) {
    if (isOdd(currentNumber)) {
      evenFibonacciNumbers.push(currentNumber);
    }
    const nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
  console.log(evenFibonacciNumbers)
  return evenFibonacciNumbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(findTheSumOfTheEvenFibonacciNumbersBelow(     10)); //      10
console.log(findTheSumOfTheEvenFibonacciNumbersBelow(    100)); //      44
console.log(findTheSumOfTheEvenFibonacciNumbersBelow(   2500)); //     798
console.log(findTheSumOfTheEvenFibonacciNumbersBelow( 100000)); //   60696
console.log(findTheSumOfTheEvenFibonacciNumbersBelow(4000000)); // 4613732