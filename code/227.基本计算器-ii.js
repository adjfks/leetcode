/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 * 总结一下做本题遇到的问题
 * 1. 中缀表达式转后缀时，当当前操作符优先级小于栈顶操作符优先级时，
 *    将栈顶出栈输出到输出队列，直到当前操作符优先级大于栈顶或栈为空，
 *    才将当前操作符入栈
 * 2. 改变变量时注意该变量是否为const声明
 * 3. 注意输入为字符串形式，需要识别出多位数并转为Number
 * 4. 注意输入字符串中的空格
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const op_stack = []
  const output_queue = []
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = s[i]
    if (cur === ' ') continue
    if (isOperator(cur)) {
      while (
        op_stack.length &&
        getPriority(op_stack[op_stack.length - 1]) >= getPriority(cur)
      ) {
        output_queue.push(op_stack.pop())
      }
      op_stack.push(cur)
    } else {
      while (s[i + 1] && !isOperator(s[i + 1])) {
        cur = cur + s[++i]
      }
      output_queue.push(+cur)
    }
  }
  let temp
  while ((temp = op_stack.pop())) {
    output_queue.push(temp)
  }

  const stack = []
  for (let i = 0, len = output_queue.length; i < len; i++) {
    const cur = output_queue[i]
    if (isOperator(cur)) {
      const num2 = stack.pop()
      const num1 = stack.pop()
      stack.push(calc(num1, num2, cur))
    } else {
      stack.push(cur)
    }
  }
  return stack.pop()
}
function getPriority(op) {
  switch (op) {
    case '*':
    case '/':
      return 2
    case '+':
    case '-':
      return 1
    default:
      return 0
  }
}
function isOperator(op) {
  return ['+', '-', '*', '/'].includes(op)
}
function calc(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return Math.floor(num1 / num2)
  }
}

console.log(calculate('1+2*5/3+6/4*2'))
// @lc code=end

