// Logarithmic space and time complexcity
const arr = [1, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 25, 29, 30]

// our goal is to find 15 in the code
// console.time("normal")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 15) {
//         console.log(`15 found at index ${i}: ${arr[i]}`);
//     }
// }
// console.timeEnd("normal")

// using binary S.
let start = 0;
let end = arr.length - 1;
let midVal = (start + end) / 2;
console.time("binaryStart")
while (start <= end) {
    let midVal = Math.floor((start + end) / 2);

    if (arr[midVal] === 15) {
        console.log(`15 found at index ${midVal}: ${arr[midVal]}`);
        found = true;
        break;
    } else if (arr[midVal] > 15) {
        end = midVal - 1;
    } else {
        start = midVal + 1;
    }
}

console.timeEnd("binaryStart")