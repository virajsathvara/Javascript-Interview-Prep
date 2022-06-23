const a = {
  name: 'viraj',
  surname: 'sathvara',
  address: {
    country: 'India',
    state: 'Gujarat'
  }
}

const b = a // Shallow Copy
b.name = 'Yash'
console.log(b.name, a.name) //  When we change derived object b, parent also changes.

const c = { ...a } // Deep copy
c.name = 'Noori'
console.log(c.name, a.name) //  When we change derived object c, parent stays same.

const d = Object.assign({}, a) // Deep copy
d.name = 'kailas'
console.log(d.name, a.name)

/**
 * Pitfall : Nested Objects
 */

d.address.country = 'Iran'
console.log(d.address.country, a.address.country) // both object and reference object changes


//  Solution 01: Recursive Function

function deepCopy (source) {
  if (source === null || typeof source !== 'object') return source

  const target = { ...source }

  for (const i in source) {
    target[i] = deepCopy(source[i])
  }
  return target
}

const e = deepCopy(a)
e.address.country = 'USA'
console.log(e.address.country, a.address.country)


//  Solution 02: JSON string

function deepCopy02 (source) {
  const temp = JSON.stringify(source)
  return JSON.parse(temp)
}

const f = deepCopy(a)
f.address.country = 'Canada'
console.log(f.address.country, a.address.country)