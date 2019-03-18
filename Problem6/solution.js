function sumOfFirstNumbers(n) {
  return n * (n + 1) / 2;
}

function sumOfSquaresOfFirstNumbers(n) {
  return n * (n + 1) * (2*n + 1)/ 6;
}

function findDifferenceBetweenSumOfSquaresOfFirstNumbersAndSquareOfSum(n) {
  const sum = sumOfFirstNumbers(n);
  return (sum * sum) - sumOfSquaresOfFirstNumbers(n);
}

console.log(10, findDifferenceBetweenSumOfSquaresOfFirstNumbersAndSquareOfSum(10));
console.log(100, findDifferenceBetweenSumOfSquaresOfFirstNumbersAndSquareOfSum(100));
console.log(1000, findDifferenceBetweenSumOfSquaresOfFirstNumbersAndSquareOfSum(1000));