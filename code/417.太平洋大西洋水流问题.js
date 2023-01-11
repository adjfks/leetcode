/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length
  const n = heights[0].length
  const pacific = Array(m).fill(false).map(i => Array(n).fill(false))
  const atlantic = Array(m).fill(false).map(i => Array(n).fill(false))
  const result = []

  for (let i = 0; i < m; i++) {
    pacific[i][0] = true
    atlantic[i][n - 1] = true
  }
  for (let i = 0; i < n; i++) {
    pacific[0][i] = true
    atlantic[m - 1][i] = true
  }

  for (let i = 0; i < m; i++) {
    dfs(pacific, i, 0, heights)
    dfs(atlantic, i, n - 1, heights)
  }
  for (let i = 0; i < n; i++) {
    dfs(pacific, 0, i, heights)
    dfs(atlantic, m - 1, i, heights)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j])
      }
    }
  }
  return result
};

var dfs = function (arr, i, j, heights) {
  if (!isValid(arr, i, j)) return
  if (isValid(arr, i - 1, j) && !arr[i - 1][j] && heights[i - 1][j] >= heights[i][j]) {
    arr[i - 1][j] = true
    dfs(arr, i - 1, j, heights)
  }
  if (isValid(arr, i, j - 1) && !arr[i][j - 1] && heights[i][j - 1] >= heights[i][j]) {
    arr[i][j - 1] = true
    dfs(arr, i, j - 1, heights)
  }
  if (isValid(arr, i + 1, j) && !arr[i + 1][j] && heights[i + 1][j] >= heights[i][j]) {
    arr[i + 1][j] = true
    dfs(arr, i + 1, j, heights)
  }
  if (isValid(arr, i, j + 1) && !arr[i][j + 1] && heights[i][j + 1] >= heights[i][j]) {
    arr[i][j + 1] = true
    dfs(arr, i, j + 1, heights)
  }
}

var isValid = function (arr, i, j) {
  const m = arr.length
  const n = arr[0].length
  return i >= 0 && i < m && j >= 0 && j < n
}
// @lc code=end

// test
// const arr1 = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
// console.log(pacificAtlantic(arr1));
