/*
 * @lc app=leetcode.cn id=2216 lang=javascript
 *
 * [2216] 美化数组的最少删除数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    let ans = 0;
    const len = nums.length
    for (let i = 0;i + 1 < len; i++) {
      if (nums[i] === nums[i + 1]) ans++
      else i++
    }
    if ((len - ans) % 2) ans++
    return ans
};
// @lc code=end

