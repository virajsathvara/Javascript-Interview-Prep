

/*
  c = 3, r = 3
  7 8 9
  6 5 4
  1 2 3

*/
function snl (c, r) {
  let asc = r % 2
  let maxValue = c * r
  for (let i = 0; i < r; i++) {
    let row = ""
    for (let j = 0; j < c; j++) {
      if (!asc) {
        row = row + " " + (maxValue - j)
      } else {
        row = row + " " + (maxValue - c + 1 + j)
      }
    }
    console.log(row)
    maxValue = maxValue - c
    asc = !asc
  }
}

snl(4, 4)