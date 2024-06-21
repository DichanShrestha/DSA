// recursion program to find sum of n natural numbers
function recursion (n) {
    if (n === 0) return 0;
    return n + recursion(n-1)
}
console.log(recursion(5));
