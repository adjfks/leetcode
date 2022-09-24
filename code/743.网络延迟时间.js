/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const time = Array(n + 1).fill(Infinity)
  time[k] = 0
  for (let i = 0; i < n; i++) {
    for (const [u, v, t] of times) {
      // 跳过非相邻节点
      if (time[u] === Infinity) continue
      // 如果到达v的时间大于经过u到达v的时间，则更新v的时间
      if (time[v] > time[u] + t) {
        time[v] = time[u] + t
      }
    }
  }

  let res = 0
  for (let i = 1; i < n + 1; i++) {
    res = Math.max(res, time[i])
  }
  return res === Infinity ? -1 : res
}
// @lc code=end
