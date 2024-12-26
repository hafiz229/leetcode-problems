/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const squareSum = (num) => {
        let total = 0;
        while(num>0) {
            const remainder = num % 10;
            num = Math.floor(num/10);
            total += remainder * remainder;
        }
        return total;
    }

    const map = new Map();
    while(n !== 1 && !map.has(n)) {
        map.set(n,n)
        n = squareSum(n);
    }
    return n === 1;
};