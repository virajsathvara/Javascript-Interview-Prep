/*
Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.
Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// brute force: loop twice and go through every possible combination
function maxSubArrSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subArrSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      // sum of elements i to j.
      // adding arr[j] to the previos sum.
      if (j === i + 1) {
        subArrSum = arr[i] + arr[j];
        maxSum = Math.max(maxSum, subArrSum);
        continue;
      }
      subArrSum += arr[j];
      maxSum = Math.max(maxSum, subArrSum);
    }
  }
  return maxSum;
}

// The intuition of the algorithm is not to consider the subarray
// as a part of the answer if its sum is less than 0.
// A subarray with a sum less than 0 will always reduce our answer
// and so this type of subarray cannot be a part of the subarray with maximum sum.
function maxSubArrSumOptimal(arr) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
      continue;
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [12, 0, -34, 5, -78, 90, -8, 0];
console.log(maxSubArrSumOptimal(arr2));
console.log(maxSubArrSum(arr));
