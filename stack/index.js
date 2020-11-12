/**
 * 栈：一种后进先出的线性表，分为入栈和出栈两种操作
 * javascript没有栈，但可以用数组来模拟栈的所有功能
 */
const stack = [];
//入栈,Array.push将一个或多个元素添加到数组元素的末尾，并返回该数组的新长度
stack.push(1);
stack.push(2)
console.log(stack);
//出栈，Array.pop从数组中删除最后一个元素，并返回该元素的值，此方法更改数组的长度
stack.pop()
