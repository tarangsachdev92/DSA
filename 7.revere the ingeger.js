/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = x < 0;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let reminder = x % 10;
        rev = (rev * 10) + reminder;
        x = Math.floor(x / 10)
    }

    let limit = Math.pow(2,31) // 2 ** 

    if(rev < -limit || rev > limit-1) return 0;

    return isNegative ? -rev : rev;
};
