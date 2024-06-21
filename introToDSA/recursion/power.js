// Iterative method

// const powFunction = (x,n) => {
//     let result = 1
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result
// }

// console.log(powFunction(2,4));


// recursive method

const powFunction = (x,n) => {
    if (n === 0) return 1;

    return x * powFunction(x, n-1);
}

console.log(powFunction(3,1));