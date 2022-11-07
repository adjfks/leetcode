/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 * 错误：
 * 1. left++的时机
 * 2. left应该为左边区最后一个元素的索引，这样在没有发生交换时才不会出错
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const idx = quickSort(nums, 0, nums.length - 1, k)
  return nums[idx]
};

var quickSort = function (arr, startIdx, endIdx, k) {
  const midIdx = partition(arr, startIdx, endIdx)
  if (midIdx === k - 1) {
    return midIdx
  }
  const res1 = quickSort(arr, startIdx, midIdx - 1)
  if (res1 !== undefined) return res1
  const res2 = quickSort(arr, midIdx + 1, endIdx)
  if (res2 !== undefined) return res2
}

var partition = function (arr, startIdx, endIdx) {
  const pivotIdx = Math.ceil(Math.random() * (endIdx - startIdx)) + startIdx
  const pivotVal = arr[pivotIdx]
  wrap(arr, startIdx, pivotIdx)
  let left = startIdx
  for (let i = left + 1; i <= endIdx; i++) {
    if (arr[i] >= pivotVal) {
      left++
      wrap(arr, left, i)
    }
  }
  wrap(arr, startIdx, left)
  return left
}

var wrap = function (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// @lc code=end
findKthLargest([3, 2, 1, 5, 6, 4], 2)
