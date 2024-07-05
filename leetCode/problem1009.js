// const bitwiseComplement = function(n) {
//     if (n === 0) return 1; // Handle edge case when n is 0

//     const arr = [];
//     while (n !== 0) {
//         // Append the complement of the current bit
//         !(n & 1) ? arr.push(1) : arr.push(0);
//         n >>= 1; // Right shift to process the next bit
//     }

//     // Reverse the array and join it to form the binary string, then convert to a number
//     const complementBinaryStr = arr.reverse().join('');
//     return parseInt(complementBinaryStr, 2); // Convert binary string to a decimal number
// };

// console.log(bitwiseComplement(5)); // Output: 2


const bitwiseComplement = n => {
    if (n === 0) return 1;

    let num = n;
    let mask = 0;

    while (num !== 0) {
        num >>= 1;
        mask = (mask << 1) | 1;
    }

    return (~n) & mask;
}

console.log(bitwiseComplement(5));  // Output: 2
console.log(bitwiseComplement(7));  // Output: 0
console.log(bitwiseComplement(10)); // Output: 5
console.log(bitwiseComplement(0));  // Output: 1
