# Credit Card Number Generator and Validator

This Node.js program allows users to generate a random 10-digit credit card number and validate a given 10-digit credit card number.

## Installation

To use this program, you must have Node and NPM installed on your machine, preferably node 14.17.5 and npm 6.14.14.

To start the app run `npm start` in your terminal

## Usage

Upon running the program, users will be prompted to either generate a credit card number or validate an existing credit card number.

If the user selects to generate a credit card number, the program will generate a random 10-digit number and check if it is a valid credit card number using the Luhn algorithm. If the generated number is valid, it will be displayed on the console. If not, the program will generate another random number until a valid one is found.

If the user selects to validate a credit card number, the program will prompt the user to enter a 10-digit credit card number. The program will then check if the entered number is valid using the Luhn algorithm and display the result on the console.
