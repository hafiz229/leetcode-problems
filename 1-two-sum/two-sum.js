/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i=0; i<nums.length; i++) {
        const difference = target - nums[i];

        if(map.has(difference) && map.get(difference) !== i) {
            return [i, map.get(difference)]
        }

        map.set(nums[i], i);
    }
};