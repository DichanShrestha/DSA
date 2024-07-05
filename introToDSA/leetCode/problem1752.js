const check = function(nums) {
    let count = 0;

    if (nums[nums.length - 1] > nums[0]) {
        count++;
    }
    for (let i = 0; i < (nums.length - 1); i++) {
        if (nums[i] > nums[i+1]) {
            count++;
        }        
    }
    return (count === 1 || count === 0)
};

console.log(check([1,1,1]));
