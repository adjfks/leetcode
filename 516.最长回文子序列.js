/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/* 
solution 1 动态规划
1. dp[i][j] 表示[i,j]区间的最长回文串长度为dp[i][j]
2. 递推关系：
if(s[i] === s[j]){
  j === i dp[i][j] = 1
  j - i === 1 dp[i][j] = 2
  j - i > 1 dp[i][j] = dp[i+1][j-1] + 2
}else{
  dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j])
}
3. 初始化为0
4. 从左到右，从下到上
*/
var longestPalindromeSubseq = function (s) {
  const len = s.length
  const dp = Array(len)
    .fill(0)
    .map((x) => Array(len).fill(0))
  let ans = 0
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j]) {
        if (j === i) dp[i][j] = 1
        else if (j - i === 1) dp[i][j] = 2
        else dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans
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
