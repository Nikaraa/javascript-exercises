const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((total, current) =>
    total + current, 0)
};

const multiply = function (array) {
  return array.reduce((total, current) =>
    total * current, 1)
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (x) {
  if(x==1) return 1
  let resFact = 1;
  for (let i = x; i > 0; i--) {
    resFact *= i;
  }
  return resFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
