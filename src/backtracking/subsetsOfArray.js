function findSubsets (subset, input, output, index) {
  if (input.length === index) {
    subset.push(output)
    return
  }

  findSubsets(subset, input, [...output], index + 1)

  output.push(input[index])
  findSubsets(subset, input, [...output], index + 1)

}

let subset = []
let input = [1, 2, 3]
findSubsets(subset, input, [], 0)
console.log(subset)