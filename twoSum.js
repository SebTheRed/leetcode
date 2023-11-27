// TEST:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// SOLUTION:
// Double loop them som' bitches checking values.
// Values should not and do not check their identical index match, or any number that came before the top level [i] index.

 // for loop over every integer, excluding the previous index from the next loop.
var twoSum = function(nums, target) {
  for (i=0;i<nums.length;i++){
      for (j=i+1;j<nums.length;j++){
          if ((nums[i]+nums[j]) == target) {
              return [i, j];
          }
      }
   }
}