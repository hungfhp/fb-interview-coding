/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 11h42
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const n2 = nums[j];
      if (n1 + n2 === target) {
        return [i, j]
      }
    }
  }
};

// OR 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 11h42
 */
const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};