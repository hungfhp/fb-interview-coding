/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let sorted = []
  const m = nums1.length
  const n = nums2.length

  let i1 = 0, i2 = 0
  while (i1 < m || i2 < n) {
    if(i1 >= m) {
      sorted.push(nums2[i2])
      i2++
      continue
    }
    if(i2 >= n) {
      sorted.push(nums1[i1])
      i1++
      continue
    }
    if (nums1[i1] > nums2[i2]) {
      sorted.push(nums2[i2])
      i2++
    } else {
      sorted.push(nums1[i1])
      i1++
    }
  }

  let sorted_length = sorted.length
  if (sorted_length % 2 === 1) {
    return sorted[Math.floor(sorted_length / 2)]
  } else {
    return ( sorted[Math.floor(sorted_length / 2)] +  sorted[Math.floor(sorted_length / 2)-1]) / 2
  }
};