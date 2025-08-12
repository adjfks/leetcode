/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const next = [0]
    let j = 0
    for (let i = 1; i < s.length; i++) {
      while(j > 0 && s[i] !== s[j]) {
        j = next[j - 1]
      }
      if (s[i] === s[j]) {
        j++
      }
      next.push(j)
    }
    return next[s.length - 1] !== 0 && s.length % (s.length - next[s.length - 1]) === 0
};
// @lc code=end

