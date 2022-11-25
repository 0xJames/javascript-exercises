const convertToCelsius = function(degreeF) {
  degCel= (degreeF- 32) * 5/9
  return Number(degCel.toFixed(1))
};

const convertToFahrenheit = function(degreeC) {
  degFah= (degreeC * 9/5) + 32 
  return Number(degFah.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
