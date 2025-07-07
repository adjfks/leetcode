/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charMap = Array(26).fill(0)
    const baseCode = 'a'.charCodeAt(0)
    magazine.split('').forEach(item => {
      charMap[item.charCodeAt(0) - baseCode] += 1
    })
    ransomNote.split('').forEach(item => {
      charMap[item.charCodeAt(0) - baseCode] -= 1
    })
    return charMap.every(item => item >= 0)
};
// @lc code=end

