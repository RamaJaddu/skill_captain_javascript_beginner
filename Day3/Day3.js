//Write a function that converts temperature from Celsius to Fahrenheit. The formula for conversion is: `F = (C * 9/5) + 32

function convertCelsiusToFarenheit(celsius){
    // Convert Celsius to Fahrenheit using the formula
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;

}

// Test the function
const celsius = 30;
 // Change the Celsius temperature as per your requirement
const fahrenheit = convertCelsiusToFarenheit(celsius);
console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");