// naive solution

// const singleNumber = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count ++;
//             }
//         }       
//         if (count === 1) {
//             return nums[i]
//         }
//         count = 0;
//     }
// };

// console.log(singleNumber([2,2,1]));

const singleNumber = arr => {
    let num = arr[0]
    for (let i = 1; i < arr.length; i++) {
        num ^= arr[i]
    }
    return num;
}

console.log(singleNumber([2,2,1]));