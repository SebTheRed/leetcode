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


// Behold the beautiful O(n) single pass function!
const twoSum = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++){
    let elem = nums[i];
    let product = target - elem;
    if (hashMap[product] !== undefined && hashMap[product] !== i) {
      console.log("we made it: ", [i , hashMap[product]]);
      return [i , hashMap[product]];
    }
    hashMap[elem] = i;
  }
}