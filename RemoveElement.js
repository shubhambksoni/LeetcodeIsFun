/**
 * Link to original problem - https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(val === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    
    return nums.length;
};
