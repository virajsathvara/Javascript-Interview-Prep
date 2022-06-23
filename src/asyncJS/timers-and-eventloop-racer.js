
/**
 * https://medium.com/hackernoon/settimeout-vs-setimmediate-vs-process-nexttick-ffafa3b36de2
 * 
 * https://nodejs.dev/learn/understanding-setimmediate
 */
let racer1 = function () {
  setTimeout(() => console.log("timeout1"), 0);
  setImmediate(() => console.log("immediate1"));
  process.nextTick(() => console.log("nextTick1"));
}
let racer2 = function () {
  process.nextTick(() => console.log("nextTick2"));
  setTimeout(() => console.log("timeout2"), 0);
  setImmediate(() => console.log("immediate2"));
}
let racer3 = function () {
  setImmediate(() => console.log("immediate3"));
  process.nextTick(() => console.log("nextTick3"));
  setTimeout(() => console.log("timeout3"), 0);
}
/* racer1()
racer2()
racer3() */


let racer = function () {
  setTimeout(() => console.log("timeout"), 0);
  process.nextTick(() => console.log("nextTick"));
  setImmediate(() => console.log("immediate"));
  console.log("current event loop");
}
racer()