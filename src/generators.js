function* makeRangeIterator (start = 0, end = 100, step = 100) {
  let iterationCount = 0
  for (let i = start; i < end; i++) {
    iterationCount++
    yield i
  }
  return iterationCount
}

/* const it = makeRangeIterator()

for (let i of it) {
  console.log(i)
} */

function* makeGenerator () {
  yield 1
  yield 2
  yield 3
  return 4
}

const gen = makeGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
