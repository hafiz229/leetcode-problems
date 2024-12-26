/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const length = nums.length;

    if(length === 0) return [];

    const output  = [];
    let temp = `${nums[0]}`;

    for(let i=1; i<length; i++) {
        if(nums[i] === nums[i-1] + 1) continue;
        if(temp == nums[i-1]) {
            output.push(temp);
        } else {
            output.push(`${temp}->${nums[i-1]}`);
        }
        temp = `${nums[i]}`
    }

    if(temp == nums[length-1]) {
        output.push(temp);
    } else {
        output.push(`${temp}->${nums[length-1]}`);
    }

    return output;
};