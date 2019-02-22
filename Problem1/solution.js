
function isMultipleOf(value, number) {
  return value % number === 0;
}

function findSummOfAllMultiplesOf3Or5Bellow(number) {
  
  if (number < 3) return 0;

  const multiplesOf3Or5 = [];

  for(let i = 1; i < number; i++) {
    if (isMultipleOf(i, 3) || isMultipleOf(i, 5)) {
      multiplesOf3Or5.push(i);
    }
  }
  
  return multiplesOf3Or5.reduce((sum, multiple) => {
    return sum + multiple;
  }, 0);

}

console.log(findSummOfAllMultiplesOf3Or5Bellow(     10)); //           23
console.log(findSummOfAllMultiplesOf3Or5Bellow(    100)); //         2318
console.log(findSummOfAllMultiplesOf3Or5Bellow(   1000)); //       233168
console.log(findSummOfAllMultiplesOf3Or5Bellow(  10000)); //     23331668
console.log(findSummOfAllMultiplesOf3Or5Bellow( 100000)); //   2333316668
console.log(findSummOfAllMultiplesOf3Or5Bellow(1000000)); // 233333166668