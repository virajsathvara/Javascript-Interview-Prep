/*
  Given an array arr having N integers, the task is to find a pair with
  maximum sum and having the same sum of digits. Print the sum of that pair,
  if it exists. Otherwise, print -1.
  
  Examples: 
  Input:  arr[]={55, 23, 32, 46, 88}
  Output:  46 55 101
  Explanation: Pair {55, 46} will give the sum of 55 + 46 = 101 

  Input: arr[]={18, 19, 23, 15}
  Output: -1
*/
export const maxSumPairWithSameDigitSum = (arr) => {
  const pair = new Map()
  let max = -1
  let pairi = 0, pairj = 0
  for (let element of arr) {
    const sum = sumOfDigits(element)

    if (pair.has(sum)) {
      if (element + pair.get(sum) > max) {
        max = pair.get(sum) + element
        pairi = element
        pairj = pair.get(sum)
      }
      pair.set(sum, Math.max(element, pair.get(sum)))
    } else {
      pair.set(sum, element)
    }
  }
  if (max > 0)
    console.log(`${pairi} ${pairj} ${max}`)
  else
    console.log(-1)
}

export const sumOfDigits = (number) => {
  let result = 0
  while (number != 0) {
    const digit = number % 10
    result += digit
    number = Math.floor(number / 10)
  }
  return result
}