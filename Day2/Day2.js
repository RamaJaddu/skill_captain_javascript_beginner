// Write a program that prints the first 10 multiples of a given number. If the number is negative or zero, print an error message.

function printMultiplies(){

    console.log("Welcome to if and for loop");

    var number = 3

    // Check if the number is negative or zero
    if (number <= 0) {
        console.log("Error: Please enter a positive non-zero number.");
         return;
   }
    // Print the first 10 multiples of the given number
    console.log("The first 10 multiples of " + number + " are:");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }



}

printMultiplies();