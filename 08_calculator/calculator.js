const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
    
  });
  return sum;
	
};

const multiply = function(array) {
  if (array.length < 1){
    return 0

  }
  let product = 1;
  array.forEach(element => {
    product *= element;
    
  });
  return product;


};

const power = function(a,b) {
  let power = 1;
  for(let i = 1;i <= b;i++){
    power *= a;

  }
  return power;
	
};

const factorial = function(a) {
  let factorial =  1;
  for (let i = a;i >= 1; i--){
    factorial *= i;
  }
  return factorial;
	
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
