/**
 * Given an array of sorted integers. We need to find the closest value to the given number. Array may contain duplicate values and negative numbers. 

Examples:  

Input : arr[] = {1, 2, 4, 5, 6, 6, 8, 9}
             Target number = 11
Output : 9
9 is closest to 11 in given array

Input :arr[] = {2, 5, 6, 7, 8, 8, 9}; 
       Target number = 4
Output : 5
 */

function findClosest (arr, n) {
  const l = arr.length

  if (n <= arr[0]) {
    return arr[0]
  }
  if (n >= arr[l - 1]) {
    return arr[l - 1]
  }

  const middle = Math.floor(l / 2)
  if (n < arr[middle]) {
    arr.splice(middle + 1)
    if (arr.length > 2)
      findClosest(arr, n)
    if (n - arr[0] > arr[1] - n)
      return arr[1]
    return arr[0]
  }
  if (n > arr[middle]) {
    findClosest(arr.splice((middle - 1)), n)
  }
}

const a = [2, 5, 6, 7, 8, 8, 9]
const t = 4
const sarr = a.sort()
console.log(findClosest(sarr, t))