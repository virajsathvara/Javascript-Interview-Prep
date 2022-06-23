//   function that runs immediatly and returns o/p in 3s
const name = 'viraj'

function printName () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done executing!!')
    }, 3000)
  })
}

//  printName()

module.exports = function () {
  return async function init () {
    const result = await printName()
    console.log(result)

    return "coming back from init"
  }
}

