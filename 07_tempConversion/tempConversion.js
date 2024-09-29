const convertToCelsius = function() {

  let fahr = arguments[0]

  let numC = (fahr - 32) * 5 / 9

  let rnumC = Math.round(numC * 10) / 10

  return rnumC

};

const convertToFahrenheit = function() {

  let cels = arguments[0]

  let numF = (cels * 9 / 5) + 32

  let rnumF = Math.round(numF * 10) / 10

  return rnumF

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
