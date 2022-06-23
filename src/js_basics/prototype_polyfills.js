// add your implementation of bind

function myFunction (hometown, country) {
    console.log(`my name is ${this.name} ${this.surname}. I am from ${hometown}, ${country}`)
}

const obj = {
    name: 'viraj',
    surname: 'sathvara'
}


Function.prototype.myBind = function (obj) {
    const fun = this
     return function(...args) {
        return fun.apply(obj, [...args])
     }
}
//const newFun = myFunction.bind(obj)
const newFun = myFunction.myBind(obj)
newFun('Demai', 'India')