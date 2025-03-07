// function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
// driver code
let celsius = 37;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is ${fahrenheit}°F`); // 37°C is 98.6°F