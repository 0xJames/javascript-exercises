const add = function(a, b) {
  return a + b;
	
};

const subtract = (a,b) => a - b;


const sum = (array) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  ;

const multiply = (array) => array.reduce((accumulator, currentValue) => accumulator * currentValue);

const power = (a,b) => a ** b;

const factorial = function(n){
  const nArray = [];
  for (let i = n; i > 0; i--){
    nArray.push(i);
  }
  return nArray.reduce((accumulator,currentValue) => accumulator * currentValue, 1);
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
