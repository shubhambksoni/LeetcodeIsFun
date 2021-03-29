/**
 * Link to original problem - https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxValue = 0;
    let start = 0;
    let end = height.length - 1;
    
    while(start<end){
        let isStartHeightLess = false;
        const currentBlockHeight = height[start] < height[end] ? (isStartHeightLess = true, height[start]) : height[end]; 
        const currentBlockArea = currentBlockHeight * (end - start);
        if(currentBlockArea > maxValue) maxValue = currentBlockArea;
        isStartHeightLess ? start++ : end--;
    }
    
    return maxValue;
};
