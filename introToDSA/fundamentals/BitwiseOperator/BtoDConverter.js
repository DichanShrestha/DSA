const converter = binaryString => {
    // Convert binary string to a number
    let binaryNumber = parseInt(binaryString, 2);
    let i = 0;
    let num = 0;
    
    // Process each bit
    while (binaryNumber !== 0) {
        if ((binaryNumber & 1) === 1) {
            num += 2 ** i;
        }
        i++;
        binaryNumber >>= 1;
    }
    
    console.log(num);
}

converter('1010'); // Output: 10
