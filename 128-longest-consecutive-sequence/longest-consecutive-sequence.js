/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let maximum = 1;
    let currentMaximum = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i-1] + 1) {
                currentMaximum++;
            } else {
                maximum = Math.max(maximum, currentMaximum);
                currentMaximum = 1;
            }
        }
    }

    return Math.max(maximum, currentMaximum);
};