// naive solution

// const twoSum = function(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if ((arr[i] + arr[j]) === target) {
//                 console.log(arr[i], arr[j]);
//                 return [i,j]
//             }
//         }
//     }
// };

// console.log(twoSum([3,2,4], 6));


// using hashmaps

const twoSum = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let targetNum = target - arr[i];
        if (map.has(targetNum)) {
            return [map.get(targetNum), i];
        }
        map.set(arr[i], i);
    }
    return null; // If no solution is found
};

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]