const converter = decimalNumber => {
    const converterArray = [];
    while (decimalNumber !== 0) {
        converterArray.push(decimalNumber & 1);
        decimalNumber >>= 1;
    }
    console.log(converterArray.reverse().join(''));
}

converter(10);  // Output: "1010"
