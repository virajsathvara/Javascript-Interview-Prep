'use strict';
const obj = {
  a: this,
  b: function () {
    return this;
  },
  c: () => {
    return this;
  },
  d () {
    return this;
  },
  e: function () {
    return this.a;
  }
}

console.log('a: ', obj.a, this === obj.a) //  a refers to global context
console.log('------------------')
console.log('b: ', obj.b, obj === obj.b()) // b refers to obj's context
console.log('------------------')
console.log('c: ', obj.c())
console.log('------------------')
console.log('d: ', obj.d())
console.log('------------------')
console.log('e: ', obj.e())



/***
 * assign context to a function,
 */

const me = {
  name: 'viraj',
  surname: 'sathvara',
  printName () {
    console.log(`${this.name} ${this.surname}`)
  }
}

function fullName () {
  console.log(`${this.name} ${this.surname}`)
}

try {
  fullName() // calling fullName where it has global context
} catch (error) {
  console.log('error while calling fullName: ', error.message);
}

const fullNameBound = fullName.bind(me)
try {
  fullNameBound() // calling fullName bound with Oject 'me'
} catch (error) {
  console.log('error while calling fullNameBound: ', error.message);
}

me.printName() // printName function's context refers to me object 

const pn = me.printName //  we are plucking printName out of me so the context of pn changes to global

try {
  pn() // What do you think this should print?
} catch (error) {
  console.log('error while calling function pn: ', error.message);
}
