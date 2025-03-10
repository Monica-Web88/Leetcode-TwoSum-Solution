/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const hash = {};
    let n = nums.length;
    for (let i = 0; i < n; i++) 
    {
        const complement = target - nums[i];
        if (complement in hash) 
        {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return [];
};
