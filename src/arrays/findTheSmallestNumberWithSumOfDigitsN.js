
/*
  Given a positive integers N,
  the task is to find the smallest number whose sum of digits is N.

  Input: N = 10
  Output: 19
  Explanation:
  1 + 9 = 10 = N

  Input: N = 18
  Output: 99
  Explanation:
  9 + 9 = 18 = N
*/
import { sumOfDigits } from "./max-sum-pair-with-same-digit-sum.js"
export const findTheSmallestNumberWithSumOfDigitsN = (N) => {
  let i = 10
  while (true) {
    const sum = sumOfDigits(i)

    if (sum === N) {
      return i
    }
    i++
  }
}