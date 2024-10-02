const add = function(a, b) {
	c = a + b;
  return c;
};

const subtract = function(a, b) {
	c = a - b
  return c
};

const sum = function(a) {
	return sumOfArray = a.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(a) {
  return sumOfArray = a.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};


const power = function(a, b) {
	c = a ** b;
  return c;
};

const factorial = function(d) {

  c = d;

  if (c < 2) {
    return b = 1
  } else {

    a = [1];

    for (let i = 1; i < c; i++) {
      a.splice(i, 0, i + 1)
    };

    arrayValue = a.reduce((total, currentItem) => {
      return total * currentItem
    })

    return arrayValue;
  }
	
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
