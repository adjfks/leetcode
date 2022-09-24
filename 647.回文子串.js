/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// solution 1 双重for循环暴力
var countSubstrings1 = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        count++
      }
    }
  }
  return count
}

// solution 2 动态规划
/* 
1. dp[i][j]: [i,j]区间的字符串是否为回文串
2. 递推公式
s[i] === s[j]:
  j - i <= 1: true
  dp[i+1][j-1]
s[i] !== s[j]: false
3. 初始化
初始化第一列和最后一行
4. 遍历顺序
依赖左下角的值，从左到右，从下到上
*/

var countSubstrings = function (s) {
  const len = s.length
  const dp = Array(len)
    .fill(false)
    .map((x) => Array(len).fill(false))
  let count = 0
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        count++
      }
    }
  }
  return count
}
function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}
// @lc code=end
