//TEST:
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//SOLUTION: 
// Firstly map over every integer in the array. 
// Secondly map over them again. If there is a match, increment tempNum (which resets every top-level map)
// Lastly check if tempNum had a score higher than one (more than one match) and if so increment mainNum
// If mainNum is greater than 0 at all (meaning there was at least one match) return true. Else false.

var containsDuplicate = function(nums) {
  let mainNum = 0
  nums.map((uNum)=>{
      let tempNum = 0
      nums.map((testNum)=>{
          if (testNum == uNum) {tempNum++}
      })
      if (tempNum > 1) {mainNum++}
  })
  if (mainNum > 0) {return true} else {return false}
};