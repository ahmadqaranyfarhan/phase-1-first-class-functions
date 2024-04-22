function receivesAFunction(callback) {
  callback();
}
function callback() {
  console.log(`I'M THE BEST ^-^`);
}
receivesAFunction(callback);

function returnsANamedFunction() {
  return function notLie() {
    console.log(
      `I enjoy these assignments "That was not i lie, I promise ^-^"`
    );
  };
}
let myFunction = returnsANamedFunction();
myFunction();

function returnsAnAnonymousFunction() {
  return function () {
    console.log(`it's 12:50am`);
  };
}
let func = returnsAnAnonymousFunction();
func();
