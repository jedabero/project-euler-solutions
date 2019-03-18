const primes = [2, 3];

function isPrime(number) {
  return !primes.some(prime => number % prime === 0);
}

function findTheNthPrimeNumber(n) {
  if (n < 1) return null;
  if (n < 3) return primes[n - 1];
  let currentPrime = primes[primes.length - 1];
  while (primes.length < n) {
    currentPrime += 2;
    if (isPrime(currentPrime)) {
      primes.push(currentPrime);
    }
  }
  return primes[n - 1];
}

console.log(11, findTheNthPrimeNumber(11));
console.log(101, findTheNthPrimeNumber(101));
console.log(1001, findTheNthPrimeNumber(1001));
console.log(10001, findTheNthPrimeNumber(10001));