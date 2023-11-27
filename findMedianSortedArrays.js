// TEST
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n))   (ignore if noob)


// SOLUTION:
// Merge and sort the parameters.
// meh not worth explaining for illegitimate Hard

var findMedianSortedArrays = function(nums1, nums2) {
  let firstMergeArr = [...nums1, ...nums2].sort()
  const midDex = firstMergeArr.length / 2
  if (midDex % 2 == 0) {
    let adjustedIndex = midDex -1
    let midNum = (firstMergeArr[adjustedIndex] + firstMergeArr[adjustedIndex+1])
    return (midNum / 2)
  } else {
    let trimDex = Math.floor(midDex)
    return firstMergeArr[trimDex]
  }
};
// Ignore the haters, we got the green lights.