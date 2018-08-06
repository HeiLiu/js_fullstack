import linkedListNode from './linkedListNode'
// 形成链表 将每个结点链接起来  把数据结合从开始到结束显示出来
//  head -> next -> ... -> tail
export default class linkList {
  constructor() {
    this.head = null
    this.tail = null

  }
  append (node) {
    this.head.next = node
  }
  prepend(node) {

  }
  delete () {

  }
  find () {

  }
  toString () {
    
  }
}
