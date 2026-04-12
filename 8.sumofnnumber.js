let num = 5

function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum
}
console.log(sum(num))


// recursion way
function sum1(n) {
    if (n === 0) {
        return 0
    }
    return n+sum(n-1)
}

console.log(sum1(num))
