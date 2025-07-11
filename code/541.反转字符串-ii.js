/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const reverse = (s, i, j) => {
      let l = i
      let r = j
      while(l < r) {
        const temp = s[l]
        s[l++] = s[r]
        s[r--] = temp
      }
    }
    const arr = s.split('')
    const len = s.length
    for (let i = 0; i < len; i = i+2*k) {
      reverse(arr, i, i + k - 1 < len ? i + k - 1 : len - 1)
    }
    return arr.join('')
};
// @lc code=end

