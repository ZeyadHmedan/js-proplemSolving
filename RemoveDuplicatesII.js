/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0 ; i < nums.length - 2; i++){
      if(nums[i] === nums[i + 1] && nums[i] === nums[i + 2] ){
          nums.splice(i,1)
          i--;
      } 
  }
};

