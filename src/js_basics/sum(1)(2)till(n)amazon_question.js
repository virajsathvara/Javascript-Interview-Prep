function sum (a) {
  return function (b) {
    console.log(a, b);
    if (b)
      return sum(a + b)
    return a
  }

}

/* const sum = (a) => (b) => b ? sum(a + b) : a */


const result = sum(1)(2)(3)(4)()
console.log(result)