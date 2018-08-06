import linkedListNode from './linkedListNode'
// 形成链表 将每个结点链接起来  把数据结合从开始到结束显示出来
//  head -> next -> ... -> tail
export default class linkedList {
  constructor() {
    this.head = null
    this.tail = null

  }
  append (value) {
    // 生成一个新的结点
    const newNode = new linkedListNode(value)
    // 链表为空 head为空
    // 不为空 tail.next 为 null
    // this.head.next = node
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      // 支持链式调用
      return this
    } 
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  prepend(value) {
    const newNode = new linkedListNode(value, this.head)
    this.head = newNode
    if(!this.tail) {
      this.tail = newNode
      return this
    }
    // newNode.next = this.head
    return this
  }
  delete (value) {
    if(!this.head) {
      return null
    }
    let deletedNode = null
    // 先判断头结点 
    while(this.head &&  this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }
    let currentNode = this.head
    if(currentNode !== null ) {
      while(currentNode.next) {
        if( currentNode.next.value === value ) {
          deletedNode = currentNode.next
          currentNode.next = deletedNode.next
        } else {
          currentNode = currentNode.next
        }
      }
    }
    if(this.tail.value === value) {
      this.tail = currentNode
    }
    return deletedNode
  }
  
  find ({value = undefined, callback = undefined }) {
    if(!this.head) {
      return null
    }
    let currentNode = this.head
    while(currentNode) {
      if(callback && callback(currentNode.value)) {
        return currentNode
      }
      if(value !== undefined && currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  toArray() {
    const nodes = []
    let currentNode = this.head
    while(currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }
  toString (callback) {
    // 利用toString 可以判断当前的链表是不是空链表
    // return this.toArray().map(node => node.value ).join(',')
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}
