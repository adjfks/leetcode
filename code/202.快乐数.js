/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const appeared = new Set()
    while(n !== 1) {
      const arr = String(n).split('')
      appeared.add(n)
      n = arr.reduce((sum, num) => sum + Math.pow(+num, 2), 0)
      if (appeared.has(n)) {
        return false
      }
    }
    return true
};
// @lc code=end

