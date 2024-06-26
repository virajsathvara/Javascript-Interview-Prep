/**
Have the function LargestFour(arr) take the array of integers stored in arr,
and find the four largest elements and return their sum.
For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements
in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21,
so your program should return 21.
If there are less than four numbers in the array your program should return
the sum of all the numbers in the array.*/

function largestFour(arr) {
  const maxArr = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ];
  if (arr.length < 4) return arr.reduce((acc, curr) => acc + curr, 0);
  for (const a of arr) {
    if (a > maxArr[0]) {
      maxArr.unshift(a);
      continue;
    }
    if (a > maxArr[1]) {
      maxArr.splice(1, 0, a);
      continue;
    }
    if (a > maxArr[2]) {
      maxArr.splice(2, 0, a);
      continue;
    }
    if (a > maxArr[3]) {
      maxArr.splice(3, 0, a);
      continue;
    }
  }
  const realMaxArr = maxArr.slice(0, 4);
  console.log(maxArr, realMaxArr);
  return realMaxArr.reduce((acc, curr) => acc + curr, 0);
}

function largestFourBySorting(arr) {
  if (arr.length < 4) return arr.reduce((acc, curr) => curr + acc, 0);
  const sortedArr = arr.sort((x, y) => y - x);
  console.log(sortedArr);
  const newArr = sortedArr.slice(0, 4);
  return newArr.reduce((acc, curr) => curr + acc, 0);
}

//  console.log(largestFour([4, 5, -2, 3, 1, 2, 6, 6]));
console.log(largestFourBySorting([4, 5, -2, 3, 1, 2, 6, 6]));
