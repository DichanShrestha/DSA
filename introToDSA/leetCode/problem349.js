const intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    const set = new Set();
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            set.add(nums1[i]); 
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return [...set];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
