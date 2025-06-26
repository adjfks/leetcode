/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const vHead = new ListNode(0, head)
    let pre = vHead
    let cur = vHead
    while(n--) {
      cur = cur.next
    }
    while(cur.next !== null) {
      pre = pre.next
      cur = cur.next
    }
    pre.next = pre.next.next
    return vHead.next
};
// @lc code=end

