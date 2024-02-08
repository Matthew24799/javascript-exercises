const convertToCelsius = function(celsius) {
let fah = (celsius - 32) * 5 / 9
fah = Math.round(fah * 10) / 10;
return fah
};

const convertToFahrenheit = function(fahrenheit) {
 let cel = fahrenheit * 9 / 5 + 32;
 cel = Math.round(cel * 10) / 10;
 return cel;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
