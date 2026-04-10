var isPalindrome = function (x) {
    if (x < 0) return false

    let xCopy = x;
    let reverse = 0;

    while (x > 0) {
        let rem = x % 10;
        reverse = (10 * reverse) + rem;
        x = Math.floor(x / 10)
    }
    
    return reverse === xCopy

};
