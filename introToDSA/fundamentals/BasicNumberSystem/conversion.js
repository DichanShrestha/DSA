// // program to convert decimal to binary

// let decimalNumber = 69;
// const remArr = [];

// // Loop to convert decimal to binary
// while (decimalNumber > 0) {
//     const rem = decimalNumber % 2;        // Get the remainder
//     decimalNumber = Math.floor(decimalNumber / 2); // Update the decimal number
//     remArr.unshift(rem);                  // Add the remainder to the front of the array
// }

// // Join the array to form the binary string and print it
// console.log(remArr.join(''));             // Output: "10"



let decimalNumber = -5;
let binaryString = decimalNumber.toString(2);
console.log(binaryString); // Output: "10"
