const reverse = function (x) {
    // Convert the number to a string, then to an array of characters
    const numArr = [...Math.abs(x).toString()];

    // Reverse the array
    const reversedArr = numArr.reverse();

    // Join the reversed array to form a string, then convert to a number
    let reversedNum = Number(reversedArr.join(''));

    // If the original number was negative, make the reversed number negative
    if (x < 0) {
        reversedNum = -reversedNum;
    }

    // Check for integer overflow and return 0 if it overflows
    if (reversedNum > 2**31 - 1 || reversedNum < -(2**31)) {
        return 0;
    }

    return reversedNum;
};

console.log(reverse(123));   // Output: 321
console.log(reverse(-123));  // Output: -321
console.log(reverse(120));   // Output: 21
console.log(reverse(0));     // Output: 0
