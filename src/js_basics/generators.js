function* gen () {
  for (let i = 0; i < 5; i++) {
    yield i
  }
}


const a = gen()

console.log(a.next().value)
console.log(a.next().value)
console.log(a.next())
console.log(a.return())
console.log(a.next())

