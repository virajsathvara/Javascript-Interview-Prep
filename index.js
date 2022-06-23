
/* const arr = [1, 2, 3, 4];
arr.newMap = (callback) => {
  const newArray = []
  for (let i of arr) {
    newArray.push(callback(i))
  }
  return newArray
}

console.log(arr.newMap((e) => e + 1)); */

/* function parentFun () {
  var abc = 'parent'
  const bcd = () => {
    console.log(abc)
  }
  bcd()
}
parentFun() */

/* const stringCalc = (numbers) => {
  const inputs = numbers.split(",")
  console.log(inputs);
  if (inputs.length === 0) return 0
  if (inputs.length === 1) {
    if (inputs[0] === "") return 0
    else return inputs[0]
  }
  let total = 0
  for (let i of inputs) {
    total = total + parseInt(i)
  }
  return total
}

console.log(stringCalc("1,2,3")) */

/* function abc () {
  var var1 = 5;
  let let1 = 5;

  if (true) {
    var var2 = 5;
    let let2 = 5;
  }

  console.log(var1);
  console.log(var2);
  console.log(let1);
  console.log(let2);
}

console.log(var1);
console.log(var2);
console.log(let1);
console.log(let2);
 */

/* let a = {
  value: 5
} //A4D

let b = a; //A4D
b.value = 11
console.log(a.value)

let c = Object.assign(a) //shallow copy
c.value = 590
console.log(c.value, 'c')
console.log(a.value, 'a') */

/* var square1 = { x: 2, y: 3, area: () => this.x * this.y };

function Square (x, y) {
  this.x = x; this.y = y;
  this.area = () => this.x * this.y;
}

var square2 = new Square(2, 3);

console.log(square2.area()) */

/* const key = { "a": "b" };
let obj = { "a": "b" };
obj[key] = "obj";
for (let c of obj) {
  console.log(c);
} */

/* function Employee (name) {
  this.name = name;
  this.getName = () => this.name;
}

var emp = Object.create(new Employee('John'));
delete emp.name
console.log(emp.name)
console.log(emp.getName()); */

/* function Employee (name, dept) {
  this.name = name;
  this.dept = dept;
}

var emp = Object.create(Employee);
console.log(emp.length) */

/* let c = 1;

function test (c) {
  c = 2;
}

test(c);

console.log(c);

let obj = { "a": 1 }

function objTest (obj) {
  obj.a = 2;
}

objTest(obj);

console.log(obj.a);

let obj1 = { "a": 1 }

function objTest1 (...obj1) {
  obj1.a = 2;
}

objTest1(obj1);

console.log(obj1.a); */

/* (function () {
  (async function () { await Promise.resolve("Nothing"); console.log(4); })();
  Promise.resolve(5)
    .then(console.log);
  console.log(6)
})() */

/* setTimeout(function () {
  console.log(1)
}, 0);

new Promise(function executor (resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }

  console.log(3);
}).then(function () {
  console.log(4);
});

console.log(5); */

/* import { EventEmitter } from 'events'

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi 1');
});

emitter.on('myEvent', () => {
  console.log('hi 2');
});

emitter.emit('myEvent'); */

/* var promise1 = Promise.resolve(1);
var promise2 = Promise.resolve(2);

promise1.then(console.log)
promise1.then(console.log)

promise2
  .then(console.log)
  .then(console.log)
 */
/* (function () {
  setTimeout(function () { console.log(5); }, 0);
  (async function () { await "Nothing"; console.log(4); })();
  console.log(6)
})() */

/* const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(console.log('hello'))
  }, 1000)
})
pr.then(
  (res) => {
    console.log('pre hello')
  }
) */

var obj = {
  fname: "vivek",
  getName: function () {
    console.log(a)
    let a = 0
    console.log(a)
    console.log(this.fname)
  }
}
obj.getName()
console.log(a)

/* const promise = new Promise(res => res(2));
promise.then(v => {
  console.log(v); // Promise
  return v * 2;
})
  .then(v => {
    console.log(v); // 2
    return v * 2;
  })
  .finally(v => {
    console.log(v); // 4
    return v * 2;
  })
  .then(v => {
    console.log(v); // undefined
  }); */

