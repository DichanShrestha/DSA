const hammingWeight = n => {
    let count = 0;
    
    // Continue the loop until all bits of n are processed
    while (n !== 0) {
        if ((n & 1) === 1) {
            count++;
        }
        n >>= 1; // Right shift n to process the next bit
    }
    
    return count; // Return the count of '1's in the binary representation of n
}

console.log(hammingWeight(10)); // Output: 3 (binary of 7 is '111', which has 3 '1's)
