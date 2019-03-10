function largestPrimeFactorOf(number) {
  let largestPrimeFactor = 2;
  while (number % largestPrimeFactor === 0) { 
    number /= largestPrimeFactor;
  }
  if (largestPrimeFactor >= number) {
    return largestPrimeFactor;
  }
  largestPrimeFactor += 1;
  while (largestPrimeFactor < Math.sqrt(number)) {
    while (number % largestPrimeFactor === 0) { 
      number /= largestPrimeFactor;
    }
    largestPrimeFactor += 2;
  }
  if (largestPrimeFactor >= number) {
    return largestPrimeFactor;
  } else {
    return number;
  }
}

console.log(largestPrimeFactorOf(           8)); //        2
console.log(largestPrimeFactorOf(          99)); //       11
console.log(largestPrimeFactorOf(         955)); //      191
console.log(largestPrimeFactorOf(        4150)); //       83
console.log(largestPrimeFactorOf(       13195)); //       29
console.log(largestPrimeFactorOf(      445756)); //   111439
console.log(largestPrimeFactorOf(     6445756)); // 16111439
console.log(largestPrimeFactorOf(    76445756)); //    99023
console.log(largestPrimeFactorOf(   476445756)); //  1369097
console.log(largestPrimeFactorOf( 29711669698)); //   353147
console.log(largestPrimeFactorOf(600851475143)); //     6857