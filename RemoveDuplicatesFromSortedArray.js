/**
 * Link to original problem - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    for(let i = nums.length;i > 0;i--) {
        let j = i-1;
        let count = 0;
        while(j >= 0 && nums[j] === nums[i]) {
            count++;
            j--;
        }
        if(count > 0) {
            nums.splice(j + 1, count);
            i = j + 1;
        }
    }
    
    return nums.length;
};
