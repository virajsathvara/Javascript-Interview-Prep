const str = '[()]{}{[()()]()}'
const str2 = '[(])'

function checkStr (str) {
  const m = new Map()
  m.set('[', ']')
  m.set('(', ')')
  m.set('{', '}')
  const n = []
  for (let i = 0; i < str.length; i++) {
    if (m.get(str[i])) {
      n.push(m.get(str[i]))
    } else if (str[i] === n[n.length - 1]) {
      n.pop()
    } else {
      return 'Not Balanced'
    }
  }
  return 'Balanced'
}
console.log(checkStr(str))