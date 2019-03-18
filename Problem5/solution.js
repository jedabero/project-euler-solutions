function multiples(number) {
  const multiples = [];
  let divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) {
      multiples.push(divisor);
      number /= divisor;
    } else {
      divisor++;
    }
  }
  return multiples;
}

function mergeMultiples(multiplesA, multiplesB) {
  const countMultiplesA = {};
  const countMultiplesB = {};
  multiplesA.forEach(multiple => countMultiplesA[multiple] ? countMultiplesA[multiple]++ : countMultiplesA[multiple] = 1);
  multiplesB.forEach(multiple => countMultiplesB[multiple] ? countMultiplesB[multiple]++ : countMultiplesB[multiple] = 1);
  const countMultiples = { ...countMultiplesA };
  Object.keys(countMultiplesB).forEach(multiple => {
    countMultiples[multiple] = countMultiples[multiple] ? Math.max(countMultiples[multiple], countMultiplesB[multiple]) : countMultiplesB[multiple];
  });
  const multiples = [];
  Object.keys(countMultiples).forEach(multiple => {
    for (let i = 0; i < countMultiples[multiple]; i++) {
      multiples.push(multiple);
    }
  });
  return multiples;
}

function findSmallestMultiple(number) {
  let allMultiples = [];
  for (let i = 1; i < number; i++) {
    allMultiples = mergeMultiples(allMultiples, multiples(i));
  }
  return allMultiples.reduce((result, multiple) => result * multiple, 1);
}

console.log(10, findSmallestMultiple(10));
console.log(20, findSmallestMultiple(20));