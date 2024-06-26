/**
Have the function Consecutive(arr) take the array of integers stored in arr
and return the minimum number of integers needed to make the contents of
arr consecutive from the lowest number to the highest number.
For example: If arr contains [4, 8, 6] then the output should be 2 because
two numbers need to be added to the array (5 and 7) to make it a
consecutive array of numbers from 4 to 8. Negative numbers may be entered
as parameters and no array will have less than 2 elements.
*/

function consecutive(arr) {
  if (arr.length < 2) return 0;
  /** find the max and min value, we need max-min number of integers to form a consecutinve array */
  let max = -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (const i of arr) {
    max = Math.max(max, i);
    min = Math.min(min, i);
  }
  const diff = max - min + 1;
  return diff - arr.length;
}

console.log(consecutive([4, 7, 9]));
