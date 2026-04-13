
function isMultiple(num: number, mul: number) {
  return num % mul === 0;
}

export function FizzBuzz(num: number, charCode: number) {
  if (isMultiple(num, 15)) return 'FizzBuzz';
  if (isMultiple(num, 3)) return 'Fizz';
  if (isMultiple(num, 5)) return 'Buzz';
  return String.fromCharCode(charCode).toLowerCase();
}

function printSequenceAtoZ() {
  const result: string[] = [];
  for (let i = 65, j=1; i <= 90; i++, j++) {
    result.push(FizzBuzz(j, i))
  }
  console.log(result.join(','));
}

printSequenceAtoZ();


export function FizzBuzzNumbers(num: number) {
  if (isMultiple(num, 15)) return 'FizzBuzz';
  if (isMultiple(num, 3)) return 'Fizz';
  if (isMultiple(num, 5)) return 'Buzz';
  return num;
}

export function printSequence1to50() {
  const arr = Array(50).fill(0).map((_, index) => FizzBuzzNumbers(index+1))
  console.log(arr.join(','))
}

printSequence1to50();