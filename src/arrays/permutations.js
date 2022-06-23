/**
 * Input: 1 2 3
Output: 1 2 3
        2 1 3
        3 1 2
        1 3 2
        2 3 1
        3 2 1
 */

function heapPermutation (a, size, n) {
  if (size === 1) {
    return console.log(a)
  }

  for (let i = 0; i < size; i++) {
    heapPermutation(a, size - 1, n)

    if (size % 2 === 1) {
      let temp = a[0]
      a[0] = a[size - 1]
      a[size - 1] = temp
    } else {
      let temp = a[i]
      a[i] = a[size - 1]
      a[size - 1] = temp
    }
  }
}

let arr = [1, 2, 3]
heapPermutation(arr, arr.length, arr.length)