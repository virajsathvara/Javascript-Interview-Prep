/**
Problem Statement: Given an array of integers arr[] and an integer target.
1st variant:
    Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
2nd variant:
    Return indices of the two numbers such that their sum is equal to the target.
    Otherwise, we will return {-1, -1}.
Note: You are not allowed to use the same element twice.
Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

Example 1:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
Result: YES (for 1st variant)
       [1, 3] (for 2nd variant)
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

Example 2:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
Result: NO (for 1st variant)
	[-1, -1] (for 2nd variant)
Explanation: There exist no such two numbers whose sum is equal to the target
*/

function twoSum(arr, target) {
  const m = new Map();
  let result = [-1, -1];
  for (let i = 0; i < arr.length; i++) {
    const goal = target - arr[i];
    if (m.has(goal)) return [i, m.get(goal)];
    m.set(arr[i], i);
  }
  return result;
}

console.log(twoSum([2, 6, 5, 8, 11], 15));
