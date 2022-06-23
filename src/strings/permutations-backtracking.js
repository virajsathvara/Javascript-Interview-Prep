/**
 * Input: 1 2 3
Output: 1 2 3
        2 1 3
        3 1 2
        1 3 2
        2 3 1
        3 2 1
 */

function swap (a, i, j) {
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
  return a
}

function permutations (a, start, end) {
  const result = []
  if (start === end) {
    result.push(a)
  } else {
    let i
    for (i = start; i < end; i++) {
      swap(a, start, i)
      permutations(a, start + 1, end)
      swap(a, i, start)
    }
  }
  return result
}

//TODO: testing
function getCombinations (inputs) {
  if (inputs.length === 1) {
    return [inputs]
  }
  const output = []
  for (let idx = 0; idx < inputs.length; idx++) {
    const element = inputs.slice(idx, idx + 1)
    const remainCombination = getCombinations([...inputs.slice(0, idx), ...inputs.slice(idx + 1)])
    for (const combination of remainCombination) {
      output.push([...element, ...combination])
    }
  }
  return output
}

const arr = [1, 2, 3]
console.log(permutations(arr, 0, arr.length))