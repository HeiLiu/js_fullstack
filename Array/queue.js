const queue = new Array()

function inQueue(arr, param) {
  arr.push(param)
  console.log('有人入队啦，现在队列中有：', arr)
}
function outQueue(arr) {
  arr.shift()
  if(!arr.length)
  {
     console.log('现在没人排队了')
  } else {
    console.log('有人出队啦，现在队列中有：', arr)
  }
}

inQueue(queue, '我是第一个')
inQueue(queue, '我是第二个')

outQueue(queue)
outQueue(queue)
