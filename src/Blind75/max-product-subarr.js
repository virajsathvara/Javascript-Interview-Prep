/*
  Given an array that contains both negative and positive integers, find the maximum product subarray.
  Example 1:
  Input: Nums = [1,2,3,4,5,0]
  Output: 120
  Explanation: In the given array, we can see 1×2×3×4×5 gives maximum product value.

  Example2: [1,2,-3,0,-4,-5], answer: 20, [-4, -5]
*/

function maxProductSubArr(arr) {
  let maxProd = arr[0];
  let currentProd = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentProd *= arr[i];
    console.log(currentProd);
    if (
      arr[i] === 0 ||
      (currentProd < 0 && arr[i + 1] > 0 && i + 1 !== arr.length)
    ) {
      currentProd = 1;
      console.log("currentProd changed to 1");
      continue;
    }
    maxProd = Math.max(currentProd, maxProd);
  }
  console.log(maxProd);
  return maxProd;
}

const arr = [1, 2, -3, 0, -4, -5];
maxProductSubArr(arr);
