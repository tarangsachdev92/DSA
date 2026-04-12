const array = [5, 6, 9, 7, 6]


function sumOfOdd(n) {

    const isOdd = array[n] % 2 != 0;

    if (n === 0) {
        return isOdd ? array[n] : 0;
    }

    return (isOdd ? array[n] : 0) + sumOfOdd(n - 1);
}

console.log(sumOfOdd(array.length - 1))
