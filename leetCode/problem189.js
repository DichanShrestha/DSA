// const rotate = (nums, k) => {
//     for (let i = 0; i < k; i++) {
//         let lastElem = nums.splice(nums.length - 1, 1)
//         nums.unshift(lastElem[0])
//     }
//     return nums;
// }
// console.log(rotate([1,2,3,4,5,6,7], 3));


// const rotate = (nums, k) => {
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         arr[(i + k) % nums.length] = nums[i]       
//     }
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = arr[i]
//     }
// }
