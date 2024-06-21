// const countPrime = n => {
//     let count = 0;
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i === 0) {
//             count++;
//             return false;
//         }
//     }
//     return true;
// }

// const totalCount = (n) => {
//     if (n === (0 | 1)) return 0;
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         if (countPrime(i)) {
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(totalCount(15));


// Define the countPrimes function
const countPrimes = n => {
    if (n <= 1) return 0;

    const primes = new Array(n).fill(true);
    primes[0] = primes[1] = false; // 0 and 1 are not prime numbers

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }

    return count;
}

// Call the function with a parameter
let param_1 = 10;
let ret = countPrimes(param_1);
console.log(ret); // Output: 4 (primes are 2, 3, 5, 7)
