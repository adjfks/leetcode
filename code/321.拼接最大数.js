/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 * 错误1 getMax中使用了被改变的delNum 
 *  return res.slice(0, nums.length - delNum)
 * 错误2：比较两个数组大小的逻辑出错
 * 注意：归并排序合并时两个子数组都是有序的
 *  此题两个数组不一定有序，因此当遇到相同元素时，需要找到后面第一个不同的元素，谁大就放那个数组的元素
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const m = nums1.length
  const n = nums2.length
  // 总共要删除的个数
  const delNum = m + n - k
  // 穷举两个数组删除数量的组合
  // num1最多删除个数
  const max = Math.min(m, delNum)
  // num1最少删除个数
  const min = delNum - Math.min(n, delNum)
  // 当前最大的数的数组
  let res = Array(k).fill(0)
  for (let i = min; i <= max; i++) {
    const j = delNum - i
    const res1 = getMax(nums1, i)
    const res2 = getMax(nums2, j)
    const curNums = merge(res1, res2)
    res = res.join('') > curNums.join('') ? res : curNums
  }
  return res
};
function getMax(nums, delNum) {
  const stack = []
  const len = nums.length - delNum
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums[i] && delNum) {
      stack.pop()
      delNum--
    }
    stack.push(nums[i])
  }
  return stack.slice(0, len)
}
function merge(res1, res2) {
  let x = 0
  let y = 0
  const curNums = []
  while (x < res1.length && y < res2.length) {
    if (res1[x] > res2[y]) {
      curNums.push(res1[x++])
    } else if (res1[x] < res2[y]) {
      curNums.push(res2[y++])
    } else {
      let p1 = x
      let p2 = y
      while (p1 < res1.length && res1[++p1] === res2[++p2]) { }
      curNums.push(p2 >= res2.length || res1[p1] > res2[p2] ? res1[x++] : res2[y++])
    }
  }
  while (x < res1.length) {
    curNums.push(res1[x++])
  }
  while (y < res2.length) {
    curNums.push(res2[y++])
  }
  return curNums
}
