/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// solution 1
var binaryTreePaths = function (root) {
  const ans = []
  const path = []
  traverse(root)
  return ans

  function traverse(root) {
    if (!root) return
    if (!root.left && !root.right) {
      path.push(root.val)
      ans.push(path.slice().join('->'))
      path.pop()
      return
    }
    path.push(root.val)
    traverse(root.left)
    traverse(root.right)
    path.pop()
  }
}

// solution 2
var binaryTreePaths = function (root) {
  // If null return an empty array
  if (root === null) return []
  // If no children return the nodes value itself as a string within an array
  else if (root.left === null && root.right === null) return [`${root.val}`]
  else {
    // For all child paths add the root to their head one by one.
    let left = binaryTreePaths(root.left).map((x) => root.val + '->' + x)
    let right = binaryTreePaths(root.right).map((x) => root.val + '->' + x)

    // return the array with the root value attached
    return [...left, ...right]
  }
}

// @lc code=end
