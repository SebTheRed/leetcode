/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // for loop over every integer, excluding the previous index from the next loop.
 var twoSum = function(nums, target) {
  nums.map((number, index)=>{
    for (let j=0; (j+index)<nums.length; j++){
        console.log([number, nums[j]])
          if ((nums[j] + number)==target) {return [number, nums[j]]} 
     }
  })
  }
