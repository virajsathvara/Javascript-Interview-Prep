console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
setTimeout(() => console.log(4), 1);
console.log(5);


/**
 * 1
 * 5
 * 3
 * 2
 * 4
 */