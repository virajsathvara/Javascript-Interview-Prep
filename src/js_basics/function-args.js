function ensure (value) {
  console.log('arguments are:', arguments, arguments.length)
  if (arguments.length <= 0) {
    return new Error('no arguments')
  }
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined) {
      return new Error('invalid argument')
    }
  }
  return value
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}