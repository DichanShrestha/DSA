// const merge = function(nums1, m, nums2, n) {
//     while (nums1.length > m) {
//         nums1.pop()
//     }
//     const result = [...nums1, ...nums2]
//     return result.sort()
// };

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));



// const merge = (nums1, m, nums2, n) => {
//     let i = nums1.length;
//     while (i > m) {
//         if (nums1[i] === 0) {
//             nums1[i] = nums2[n-1]
//             n--;
//         }
//         i--;
//     }
//     return nums1.sort()
// }
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


const merge = (nums1, m, nums2, n) => {
    const arr = [];
    let i = 0;
    let j = 0;
    let index = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            arr[index] = nums1[i];
            i++;
            index++;
        } else {
            arr[index] = nums2[j];
            j++;
            index++;
        }
    }

    while (i < m) {
        arr[index] = nums1[i];
        i++;
        index++;
    }

    while (j < n) {
        arr[index] = nums2[j];
        j++;
        index++;
    }
    return arr;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
