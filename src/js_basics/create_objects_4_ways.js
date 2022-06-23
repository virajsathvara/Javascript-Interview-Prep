
//  using Object Literal
const objectLiteral = {
  name: 'viraj'
}

console.log('Object created with Object Literal', objectLiteral)


//  using Object.create
const objEx = {
  name: 'viraj',
  surname: 'sathvara',
  getFullName () {
    console.log(`My Name is ${this.name} ${this.surname}`)
  }
}

const objCreate = Object.create(objEx)
objCreate.name = 'Yash'
objCreate.getFullName()

// object destructuring
const objLit = { ...objEx }
objLit.getFullName()
//  using Function object
function Fun (name, surname) {
  this.name = name
  this.surname = surname
}

const funObj = new Fun('viraj', 'sathvara')

console.log('Object created with Function', funObj.name)


// using ES6 Class

class ClassObj {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

const classObj = new ClassObj('viraj', 'sathvara')
console.log('Object created with Class', classObj.surname)


/**
 * Difference between Object.create and new:
 * Both create new Object
 * Object.create sets it's prototype to first argument passed
 * new sets the object's prototype to constructor's prototype or the object's
 * Object.create() DOESN'T RUN THE CONSTRUCTOR CODE WHILE new RUNS THE CONSTRUCTOR CODE.
 */