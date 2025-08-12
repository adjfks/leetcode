/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;
  while(current) {
    let next = current.next; // 保存当前节点的下一个节点
    current.next = prev;
    prev = current;
    current = next; // 移动到下一个节点
  }
  return prev; // prev 将是新的头节点
};
// @lc code=end

