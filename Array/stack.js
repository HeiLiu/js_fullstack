const stack = new Array()

function inStack(arr, param) {
  arr.push(param)
  console.log('栈中现在有:', arr)
}

function outStack(stack) {
  stack.pop()
  console.log('栈中现在有:', stack)
}

inStack(stack, 1)
inStack(stack, 2)
inStack(stack, 3)
outStack(stack)

