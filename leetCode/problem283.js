const moveZeros = nums => {
    let i = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== 0) {
            let t = nums[i]
            nums[i] = nums[index]
            nums[index] = t;
            i++;
        }
    }
    return nums;
}

console.log(moveZeros([1, 0, 1, 3, 12]));
