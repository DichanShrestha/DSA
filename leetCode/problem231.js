// const isPowerOfTwo = function(n) {
//     let count = 0;
//     while (n !== 0) {
//         if ((n & 1) === 1) {
//             count ++;
//         }
//         n >>= 1;
//     }
//     if (count === 1) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(isPowerOfTwo(16)); // true



const isPowerOfTwo = function(n) {
    // Check if n is greater than 0 and if n & (n - 1) is 0
    return n > 0 && (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(-16)); // false
