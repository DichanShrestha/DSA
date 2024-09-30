function isValid(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    // Map to hold the matching pairs of brackets
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // If it's an opening bracket, push to stack
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // If it's a closing bracket, check the top of the stack
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return false;
            }
            // Pop the matching opening bracket from the stack
            stack.pop();
        }
    }

    // If stack is empty, all brackets were properly matched
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
