/* const init = require('./test')

init()() */

var b = 1;
function outer () {
  console.log('b in outer: ', b)
  b = 2;
  function inner () {
    console.log('b in inner', b)
    b++;
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
}

outer();

var length = 10;
function fn () {
  console.log(this)
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn, 1);