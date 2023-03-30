import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hi, welcome");

rl.question(
  "To generate a valid 10 digit credit card number enter Generate\nTo verify a 10 digit credit card number enter Verify\n",
  (answer) => {
    if (answer.toLowerCase() === "generate") {
      generateCreditCardNumber();
      rl.close();
    } else if (answer.toLowerCase() === "verify") {
      rl.question("Enter a 10 digit credit card number: ", (cardNumber) => {
        const isValid = validateCreditCardNumber(cardNumber);
        console.log(
          `The credit card number ${cardNumber} is ${
            isValid ? "valid" : "invalid"
          }`
        );
        rl.close();
      });
    } else {
      console.log("Invalid input, please try again.");
      rl.close();
    }
  }
);

function validateCreditCardNumber(parameter) {
  const numberStr = String(parameter).replace(/\D/g, "");
  const digitsArray = numberStr.split("");
  const digitsSum = [];

  // Since this is a 10 digits credit card test validation
  // returns false even if it is a valid credit
  // card but more than 10 digits even before checking
  // if it valid
  if (digitsArray.length > 10) return false;

  digitsArray.reverse();

  for (let i = 0; i < digitsArray.length; i++) {
    if (i % 2 === 0) {
      digitsSum.push(parseInt(digitsArray[i]));
    } else {
      let doubleDigit = digitsArray[i] * 2;
      if (doubleDigit > 9) {
        const doubleDigitsArray = doubleDigit.toString().split("");
        doubleDigit =
          parseInt(doubleDigitsArray[0]) + parseInt(doubleDigitsArray[1]);
      }
      digitsSum.push(doubleDigit);
    }
  }

  const totalDigitsSum = digitsSum.reduce((acc, value) => acc + value, 0);

  if (totalDigitsSum % 10 === 0) return true;
  return false;
}

function generateCreditCardNumber() {
  while (true) {
    const tenDigitNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    const validationResult = validateCreditCardNumber(tenDigitNumber);
    if (validationResult) {
      console.log("Credit card number:", tenDigitNumber);
      break;
    }
  }
}
