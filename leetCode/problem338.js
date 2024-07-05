const countBits = function(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let num = i;
        while (num !== 0) {
            if ((num & 1) === 1) {
                count++;
            }
            num >>= 1;
        }
        result.push(count);
    }
    return result;
};

console.log(countBits(2)); // Output: [0, 1, 1]
